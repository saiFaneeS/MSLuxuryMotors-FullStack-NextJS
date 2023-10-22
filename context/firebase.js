import { createContext, useContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  setDoc,
} from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { useNotification } from "./notificationContext";

const FirebaseContext = createContext(null);

// 1st Firebase Key
const firebaseConfig = {
  apiKey: "AIzaSyBmxn-bP_G5DAiEE5RdW4dqzLCuiemGz0g",
  authDomain: "msluxurymotors.firebaseapp.com",
  projectId: "msluxurymotors",
  storageBucket: "msluxurymotors.appspot.com",
  messagingSenderId: "390071557758",
  appId: "1:390071557758:web:f5b065e739263cda61422f",
  measurementId: "G-KNB6TZ3DE3",
};

// 2nd Firebase Key
// const firebaseConfig = {
//   apiKey: "AIzaSyBugJ55y-YN2Hv69J5FRh_76ptBiaXIq2o",
//   authDomain: "mslm-f5216.firebaseapp.com",
//   projectId: "mslm-f5216",
//   storageBucket: "mslm-f5216.appspot.com",
//   messagingSenderId: "749641810921",
//   appId: "1:749641810921:web:7439f0d42dfbc7ff498178",
//   measurementId: "G-W1DTBVH0BP",
// };

export const useFirebase = () => useContext(FirebaseContext);

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export const FirebaseProvider = (props) => {
  const [user, setUser] = useState(null);

  // auth
  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) setUser(user);
      else setUser(null);
    });
  }, []);

  const signupUserWithEmailAndPassword = (email, password) => {
    try {
      createUserWithEmailAndPassword(firebaseAuth, email, password);
    } catch (err) {
      console.log(err);
    }
  };

  const notification = useNotification();
  const loginUserWithEmailAndPassword = (email, password) => {
    try {
      signInWithEmailAndPassword(firebaseAuth, email, password);
      if (user) {
        notification.success("Logged in");
      }
    } catch (err) {
      notification.error("Wrong Credentials");
    }
  };

  const isLoggedIn = user ? true : false;

  // create posts
  const handleCreateNewPost = async (
    carName,
    perDay,
    perMonth,
    description,
    carImage
  ) => {
    // img upload
    const imageRef = ref(
      storage,
      `public/carImages/${Date.now()}-${carImage.name}`
    );
    const uploadResult = await uploadBytes(imageRef, carImage);
    // info upload
    try {
      await addDoc(collection(db, "posts"), {
        carName,
        perDay,
        perMonth,
        description,
        imageUrl: uploadResult.ref.fullPath,
      });
    } catch (err) {
      console.log(err);
    }
  };

  // get posts
  const getAllPosts = async () => {
    try {
      return getDocs(collection(db, "posts"));
    } catch (err) {
      console.log(err);
    }
  };

  const getPostById = async () => {
    try {
      const ref = doc(db, "posts", id);
      const docSnap = await getDoc(ref);
      if (docSnap.exists()) {
        const post = docSnap.data();
        // Use a City instance method
        console.log(city.toString());
      } else {
        console.log("No such document!");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getImageUrl = (path) => {
    return getDownloadURL(ref(storage, path));
  };

  // delete post
  const deletePost = async (id) => {
    try {
      const docRef = doc(db, "posts", id);
      await deleteDoc(docRef);
    } catch (err) {
      console.log(err);
    }
  };

  // edit post
  const editPost = async ({
    carName,
    perDay,
    perMonth,
    description,
    imageUrl,
    id,
  }) => {
    // img update
    // const imageRef = ref(storage, imageUrl);
    try {
      // const uploadResult = await uploadBytes(imageRef, imageUrl);
      // info update
      await setDoc(doc(db, "posts", id), {
        carName,
        perDay,
        perMonth,
        description,
        imageUrl,
      });
    } catch (err) {
      console.log(err);
    }
  };

  // Send Message
  const sendMessage = async (name, email, phone, message) => {
    try {
      await addDoc(collection(db, "messages"), {
        name,
        email,
        phone,
        message,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // get messages
  const getAllMessages = async () => {
    try {
      return await getDocs(collection(db, "messages"));
    } catch (err) {
      console.log(err);
    }
  };

  // delete message
  const deleteMessage = async (id) => {
    try {
      await deleteDoc(doc(db, "messages", id));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <FirebaseContext.Provider
      value={{
        signupUserWithEmailAndPassword,
        loginUserWithEmailAndPassword,
        handleCreateNewPost,
        getAllPosts,
        getPostById,
        getImageUrl,
        deletePost,
        editPost,
        sendMessage,
        getAllMessages,
        deleteMessage,
        user,
        isLoggedIn,
        firebaseAuth,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
