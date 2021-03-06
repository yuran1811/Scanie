import { DetailItem } from '@cpns/features/Res/DetailItem';
import { ErrorContent } from '@cpns/shared';

export const axiosConfig = {
  baseURL: import.meta.env.VITE_API_URL,
  headers: { 'content-type': 'application/json' },
};

export const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY as string,
  appId: import.meta.env.VITE_APPID as string,
  authDomain: import.meta.env.VITE_AUTHORIZED_DOMAIN as string,
  databaseURL: import.meta.env.VITE_DATABASEURL as string,
  measurementId: import.meta.env.VITE_MEASUREMENTID as string,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID as string,
  projectId: import.meta.env.VITE_PROJECTID as string,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET as string,
};

export const routes = {
  home: {
    index: 'home',
  },

  judge: {
    index: 'judge',
  },

  results: {
    index: 'results',
    others: {
      detail: {
        path: ':resultId',
        component: DetailItem || ErrorContent,
      },
    },
  },
};
