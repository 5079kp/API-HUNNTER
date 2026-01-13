import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore, addDoc, collection } from "firebase/firestore"
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_BUCKET",
  messagingSenderId: "ID",
  appId: "APP_ID",
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export const addBook = async (bookData) => {
  await addDoc(collection(db, "books"), bookData)
}

export const uploadImage = async (file) => {
  const imgRef = ref(storage, `books/${file.name}`)
  await uploadBytes(imgRef, file)
  return await getDownloadURL(imgRef)
}
