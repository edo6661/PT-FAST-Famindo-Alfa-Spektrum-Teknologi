import type { FirebaseApp } from "firebase/app";
import type { Auth } from "firebase/auth";
import type { Firestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

let appPromise: Promise<FirebaseApp> | null = null;

export const getFirebaseApp = (): Promise<FirebaseApp> => {
  if (!appPromise) {
    appPromise = (async () => {
      const { initializeApp, getApps } = await import("firebase/app");
      return getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
    })();
  }
  return appPromise;
};

let authPromise: Promise<Auth> | null = null;

export const getFirebaseAuth = (): Promise<Auth> => {
  if (!authPromise) {
    authPromise = (async () => {
      const { getAuth } = await import("firebase/auth");
      return getAuth(await getFirebaseApp());
    })();
  }
  return authPromise;
};

let dbPromise: Promise<Firestore> | null = null;

export const getFirebaseDb = (): Promise<Firestore> => {
  if (!dbPromise) {
    dbPromise = (async () => {
      const { initializeFirestore, memoryLocalCache } =
        await import("firebase/firestore");
      return initializeFirestore(await getFirebaseApp(), {
        localCache: memoryLocalCache(),
      });
    })();
  }
  return dbPromise;
};

export const initFirebaseAnalytics = async () => {
  const { getAnalytics, isSupported } = await import("firebase/analytics");
  if (await isSupported()) {
    getAnalytics(await getFirebaseApp());
  }
};
