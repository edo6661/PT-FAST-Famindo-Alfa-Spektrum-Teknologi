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
