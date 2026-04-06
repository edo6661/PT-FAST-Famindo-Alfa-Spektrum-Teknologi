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
} from "firebase/firestore";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { db } from "../lib/firebase";
import type { Blog } from "../types/blog";

const blogsRef = collection(db, "blogs");

const s3Client = new S3Client({
  region: "auto",
  endpoint: import.meta.env.VITE_R2_ENDPOINT,
  credentials: {
    accessKeyId: import.meta.env.VITE_R2_ACCESS_KEY_ID,
    secretAccessKey: import.meta.env.VITE_R2_SECRET_ACCESS_KEY,
  },
});

export const uploadBlogImage = async (file: File): Promise<string> => {
  const fileName = `blogs/${Date.now()}_${file.name.replace(/\s+/g, "-")}`;
  const arrayBuffer = await file.arrayBuffer();
  const buffer = new Uint8Array(arrayBuffer);

  const command = new PutObjectCommand({
    Bucket: import.meta.env.VITE_R2_BUCKET_NAME,
    Key: fileName,
    Body: buffer,
    ContentType: file.type,
  });

  await s3Client.send(command);

  return `${import.meta.env.VITE_R2_PUBLIC_URL}/${fileName}`;
};

export const getAllBlogs = async (): Promise<Blog[]> => {
  const q = query(blogsRef, orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Blog[];
};

export const getLandingPageBlogs = async (): Promise<Blog[]> => {
  const q = query(
    blogsRef,
    where("ditampilkan_di_landing_page", "==", true),
    orderBy("createdAt", "desc"),
    limit(3),
  );
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Blog[];
};

export const getBlogById = async (id: string): Promise<Blog | null> => {
  const docRef = doc(db, "blogs", id);
  const snapshot = await getDoc(docRef);
  if (snapshot.exists()) {
    return { id: snapshot.id, ...snapshot.data() } as Blog;
  }
  return null;
};

export const createBlog = async (data: Omit<Blog, "id">) => {
  const docRef = await addDoc(blogsRef, {
    ...data,
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
