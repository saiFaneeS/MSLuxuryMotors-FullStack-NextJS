import NotificationBar from "@/components/NotificationBar";
import { FirebaseProvider } from "@/context/firebase";
import { NotificationProvider } from "@/context/notificationContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps: { ...pageProps } }) {
  return (
    <>
      <FirebaseProvider>
        <NotificationProvider>
          <Component {...pageProps} />
          <NotificationBar/>
        </NotificationProvider>
      </FirebaseProvider>
    </>
  );
}
