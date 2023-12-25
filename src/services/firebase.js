// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

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
const db = getFirestore(app);
const auth = getAuth();

const getArticleById = async (articleId) => {
  const articleRef = doc(db, 'posts', articleId);
  const articleSnapshot = await getDoc(articleRef);

  if (articleSnapshot.exists()) {
    return articleSnapshot.data();
  } else {
    console.error('Статья не найдена');
    return null;
  }
};

export { db, auth, getArticleById };