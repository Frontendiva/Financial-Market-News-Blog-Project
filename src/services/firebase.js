// firebase.js
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { getDatabase, ref, get } from 'firebase/database';
import { initializeApp } from 'firebase/app';


const firebaseConfig = {
  apiKey: "AIzaSyDlDkViaKdcClm7Vz7qS__wOJ4JmqiUPCU",
  authDomain: "financial-news-blog-399a0.firebaseapp.com",
  databaseURL: "https://financial-news-blog-399a0-default-rtdb.firebaseio.com",
  projectId: "financial-news-blog-399a0",
  storageBucket: "financial-news-blog-399a0.appspot.com",
  messagingSenderId: "1076912490043",
  appId: "1:1076912490043:web:379fb6532d98464789fe1e",
  measurementId: "G-JTFXZF672V"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const database = getDatabase(app);
export const getArticleById = async (articleId) => {
  try {
    // Use Firestore to get the article data
    const articleRef = doc(firestore, 'posts', articleId);
    const articleSnapshot = await getDoc(articleRef);

    if (articleSnapshot.exists()) {
      return { id: articleId, ...articleSnapshot.data() };
    } else {
      console.error('Статья не найдена в Firestore');
    }
  } catch (error) {
    console.error('Ошибка при получении данных статьи из Firestore:', error);
  }

  try {
    // Use Realtime Database to get the article data as a fallback
    const articleRef = ref(database, `posts/${articleId}`);
    const articleSnapshot = await get(articleRef);

    if (articleSnapshot.exists()) {
      return { id: articleId, ...articleSnapshot.val() };
    } else {
      console.error('Статья не найдена в Realtime Database');
      return null;
    }
  } catch (error) {
    console.error('Ошибка при получении данных статьи из Realtime Database:', error);
    return null;
  }
};
