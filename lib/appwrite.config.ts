import * as sdk from "node-appwrite"

export const {
  NEXT_PUBLIC_APPWRITE_PROJECT_ID,
  NEXT_PUBLIC_APPWRITE_PROJECT_NAME,
  NEXT_PUBLIC_APPWRITE_ENDPOINT,
  API_KEY,
  DATABASE_ID,
  PATIENTS_COLLECTION_ID,
  DOCTORS_COLLECTION_ID,
  APPOINTMENTS_COLLECTION_ID,
  NEXT_PUBLIC_BUCKET_ID,
} = process.env

const client = new sdk.Client();

client.setEndpoint(NEXT_PUBLIC_APPWRITE_ENDPOINT!)
  .setProject(NEXT_PUBLIC_APPWRITE_PROJECT_ID!)
  .setKey(API_KEY!)

export const databases = new sdk.Databases(client);
export const storage = new sdk.Storage(client);
export const messaging = new sdk.Messaging(client);
export const users = new sdk.Users(client);