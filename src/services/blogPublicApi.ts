import type { Blog } from "../types/blog";

const projectId = import.meta.env.VITE_FIREBASE_PROJECT_ID as string;
const apiKey = import.meta.env.VITE_FIREBASE_API_KEY as string;

type FirestoreValue = Record<string, unknown>;

function parseFirestoreValue(value: FirestoreValue): unknown {
  if ("stringValue" in value) return value.stringValue;
  if ("booleanValue" in value) return value.booleanValue;
  if ("integerValue" in value) return Number(value.integerValue);
  if ("doubleValue" in value) return value.doubleValue;
  if ("nullValue" in value) return null;
  return null;
}

function parseFirestoreDocument(doc: {
  name: string;
  fields: Record<string, FirestoreValue>;
}): Blog {
  const id = doc.name.split("/").pop() ?? "";
  const data = Object.fromEntries(
    Object.entries(doc.fields).map(([key, value]) => [
      key,
      parseFirestoreValue(value),
    ]),
  );

  return { id, ...data } as Blog;
}

/**
 * One-shot Firestore REST query — no Firebase SDK, no persistent Listen channels.
 */
export async function getLandingPageBlogsPublic(): Promise<Blog[]> {
  if (!projectId || !apiKey) {
    throw new Error(
      "Firebase env vars missing: VITE_FIREBASE_PROJECT_ID / VITE_FIREBASE_API_KEY",
    );
  }

  const url = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents:runQuery?key=${apiKey}`;

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      structuredQuery: {
        from: [{ collectionId: "blogs" }],
        where: {
          fieldFilter: {
            field: { fieldPath: "ditampilkan_di_landing_page" },
            op: "EQUAL",
            value: { booleanValue: true },
          },
        },
        orderBy: [{ field: { fieldPath: "urutan" }, direction: "ASCENDING" }],
        limit: 3,
      },
    }),
  });

  if (!response.ok) {
    throw new Error(`Firestore REST error: ${response.status}`);
  }

  const results = (await response.json()) as Array<{
    document?: {
      name: string;
      fields: Record<string, FirestoreValue>;
    };
  }>;

  return results
    .filter((row) => row.document)
    .map((row) => parseFirestoreDocument(row.document!));
}
