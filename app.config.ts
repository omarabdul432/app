import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({ "projectId": "crud-86760", "appId": "1:223616176163:web:052faefa351216226fe196", "storageBucket": "crud-86760.appspot.com", "apiKey": "AIzaSyC4HsHTvGwfrOCu9Jm9O2Q_nw9aKsCLGmU", "authDomain": "crud-86760.firebaseapp.com", "messagingSenderId": "223616176163" })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
};
