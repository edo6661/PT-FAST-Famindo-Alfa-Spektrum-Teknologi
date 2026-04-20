import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  where,
  orderBy,
  limit,
  writeBatch,
  QueryDocumentSnapshot,
  type DocumentData,
  startAfter,
} from "firebase/firestore";
import { db } from "../lib/firebase";
import type { Blog } from "../types/blog";

const blogsRef = collection(db, "blogs");

export const uploadBlogImage = async (file: File): Promise<string> => {
  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", uploadPreset);
  formData.append("folder", "fast-blogs");

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
    { method: "POST", body: formData },
  );

  if (!response.ok) throw new Error("Gagal mengunggah gambar ke Cloudinary");
  const data = await response.json();
  return data.secure_url;
};

export const getAllBlogs = async (): Promise<Blog[]> => {
  const q = query(blogsRef, orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })) as Blog[];
};

export const getLandingPageBlogs = async (): Promise<Blog[]> => {
  const q = query(
    blogsRef,
    where("ditampilkan_di_landing_page", "==", true),
    orderBy("urutan", "asc"),
    limit(3),
  );
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })) as Blog[];
};

export const getBlogById = async (id: string): Promise<Blog | null> => {
  const docRef = doc(db, "blogs", id);
  const snapshot = await getDoc(docRef);
  if (snapshot.exists()) return { id: snapshot.id, ...snapshot.data() } as Blog;
  return null;
};

export const createBlog = async (data: Omit<Blog, "id" | "createdAt">) => {
  const docRef = await addDoc(blogsRef, {
    ...data,
    urutan: data.urutan || 0,
    createdAt: Date.now(),
  });
  return docRef.id;
};

export const updateBlog = async (id: string, data: Partial<Blog>) => {
  const docRef = doc(db, "blogs", id);
  await updateDoc(docRef, data);
};

export const deleteBlog = async (id: string) => {
  const docRef = doc(db, "blogs", id);
  await deleteDoc(docRef);
};

export const updateLandingPageOrder = async (
  allBlogs: Blog[],
  selectedIds: (string | null)[],
) => {
  const batch = writeBatch(db);

  allBlogs.forEach((blog) => {
    if (!blog.id) return;
    const docRef = doc(db, "blogs", blog.id);
    const index = selectedIds.indexOf(blog.id);

    if (index !== -1) {
      batch.update(docRef, {
        ditampilkan_di_landing_page: true,
        urutan: index + 1,
      });
    } else if (blog.ditampilkan_di_landing_page) {
      batch.update(docRef, {
        ditampilkan_di_landing_page: false,
        urutan: 0,
      });
    }
  });

  await batch.commit();
};

export const getPaginatedBlogs = async (
  pageSize: number,
  lastDoc: QueryDocumentSnapshot<DocumentData> | null = null,
) => {
  let q = query(blogsRef, orderBy("createdAt", "desc"), limit(pageSize));

  if (lastDoc) {
    q = query(
      blogsRef,
      orderBy("createdAt", "desc"),
      startAfter(lastDoc),
      limit(pageSize),
    );
  }

  const snapshot = await getDocs(q);
  const blogs = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Blog[];
  const lastVisible =
    snapshot.docs.length > 0 ? snapshot.docs[snapshot.docs.length - 1] : null;

  return { blogs, lastVisible };
};

export const seedDummyBlogs = async (count: number = 25) => {
  try {
    const batch = writeBatch(db);
    const blogsCollectionRef = collection(db, "blogs");

    for (let i = 1; i <= count; i++) {
      const newDocRef = doc(blogsCollectionRef);

      const pastDate = new Date();
      pastDate.setDate(pastDate.getDate() - i);

      const dummyBlog = {
        nama: `Artikel Dummy Ke-${i} untuk Testing Pagination`,
        deskripsi: `Ini adalah paragraf deskripsi panjang untuk artikel dummy nomor ${i}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Keberadaan teks ini sangat penting untuk memastikan UI tidak rusak saat menampilkan teks panjang pada halaman blog detail maupun list.`,
        foto: `https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop&random=${i}`,
        ditampilkan_di_landing_page: false,
        urutan: 0,
        createdAt: pastDate.getTime(),
      };

      batch.set(newDocRef, dummyBlog);
    }

    await batch.commit();
    alert(
      `Berhasil menambahkan ${count} artikel dummy! Silakan refresh halaman.`,
    );
  } catch (error) {
    console.error("Gagal melakukan seeding:", error);
    alert("Gagal menambahkan data dummy.");
  }
};
