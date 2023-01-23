import { initializeApp } from "firebase/app";
// 임포트 인증 서비스
import { getAuth } from "firebase/auth";
// 임포트 데이터베이스
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// 파이어베이스 기본 설정
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
  appId: process.env.REACT_APP_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const authService = getAuth(app);
export const dbService = getFirestore(app);
export const storageService = getStorage(app);
