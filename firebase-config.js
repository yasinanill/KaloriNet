
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth';
import {doc,setDoc,getFirestore,collection ,  onSnapshot,
  deleteDoc,
  addDoc,}  from "firebase/firestore";
  import firebase from "firebase/compat/app";
  import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyARGGF4N_NZ-F54LT61ITCREaDHeL2abh4",
  authDomain: "kalorinet-app.firebaseapp.com",
  projectId: "kalorinet-app",
  storageBucket: "kalorinet-app.appspot.com",
  messagingSenderId: "591862296036",
  appId: "1:591862296036:web:3d2ccef4c80a5b3e4b2bf1"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}
export{firebase};

const app = initializeApp(firebaseConfig);
 export const authentication = getAuth(app);
 export const db =  getFirestore(app);

 
export const productsRef = collection(db, "MyCollection");

export const useProductsListener = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    return onSnapshot(productsRef, (snapshot) => {
      const docs = snapshot.docs.map((doc) => {
        const data = doc.data();
        return { id: doc.id, ...data, createdAt: data.createdAt?.toDate() };
      });

      dispatch(setProducts(docs));
    });
  }, [dispatch]);
};