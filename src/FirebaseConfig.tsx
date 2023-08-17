import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import UserApi from '@/utils/api/user';

interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
}

const firebaseConfig: FirebaseConfig = {
  apiKey: import.meta.env.VITE_FB_API_KEY as string,
  authDomain: import.meta.env.VITE_FB_AUTH_DOMAIN as string,
  projectId: import.meta.env.VITE_FB_PROJECT_ID as string,
  storageBucket: import.meta.env.VITE_FB_STORAGE_BUCKET as string,
  messagingSenderId: import.meta.env.VITE_FB_MESSAGING_SENDER_ID as string,
  appId: import.meta.env.VITE_FB_APP_ID as string,
  measurementId: import.meta.env.VITE_FB_MEASUREMENT_ID as string,
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const messaging = getMessaging(firebaseApp);

// getOrRegisterServiceWorker function is used to try and get the service worker if it exists, otherwise it will register a new one.
export const getOrRegisterServiceWorker = () => {
  if (
    'serviceWorker' in navigator &&
    typeof window.navigator.serviceWorker !== 'undefined'
  ) {
    return window.navigator.serviceWorker
      .getRegistration()
      .then(serviceWorker => {
        if (serviceWorker) return serviceWorker;
        return window.navigator.serviceWorker.register(
          '/firebase-messaging-sw.js',
        );
      });
  }
  throw new Error('The browser doesn`t support service worker.');
};

// getFirebaseToken function generates the FCM token
export const handleFirebaseToken = async (assign_id: number) => {
  try {
    console.log(messaging);
    // prevent racing problem and call initializeApp -> getMessaging-> getToken in sequences.
    if (messaging) {
      const serviceWorkerRegistration = await getOrRegisterServiceWorker();
      if (serviceWorkerRegistration) {
        const fcm_token = await getToken(messaging, {
          vapidKey: import.meta.env.VITE_FB_VAPID_KEY as string,
          serviceWorkerRegistration,
        });
        if (fcm_token && assign_id) {
          UserApi.postFirebaseToken({ assign_id, push_token: fcm_token })
            .then((response: number) => {
              console.log(response);
            })
            .catch((error: Error) => console.error(error));
          // set token on localStorage
          localStorage.setItem('fcm_token', fcm_token);
        }
      }
    }
  } catch (error) {
    console.error(error);
  }
};

const handleGranted = (assign_id: number) => {
  console.log('알림 권한이 허용됨');
  handleFirebaseToken(assign_id).catch((error: Error) => console.error(error));

  onMessage(messaging, payload => {
    console.log('메시지가 도착했습니다.', payload);
  });
};

export const requestPermission = async (assign_id: number) => {
  if (!('Notification' in window)) {
    // Check if the browser supports notifications
    console.log('This browser does not support desktop notification');
  } else if (Notification.permission === 'default') {
    console.log('권한 요청 중...');
    const permission = await Notification.requestPermission();
    if (permission === 'denied') {
      console.log('알림 권한 허용 안됨');
      alert('알림 권한을 허용해주세요!');
      return;
    } else {
      handleGranted(assign_id);
    }
  }
  handleGranted(assign_id);
};
