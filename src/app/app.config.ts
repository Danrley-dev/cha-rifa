import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideAnimations} from '@angular/platform-browser/animations';
import {GridNumberComponent} from "./core/components/grid-number/grid-number.component";
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {getAuth, provideAuth} from '@angular/fire/auth';
import {getFirestore, provideFirestore} from '@angular/fire/firestore';
import {getMessaging, provideMessaging} from '@angular/fire/messaging';
import {getStorage, provideStorage} from '@angular/fire/storage';
import {environment} from '../environments/environment';
import {provideHotToastConfig} from "@ngneat/hot-toast";
import {provideToastr} from "ngx-toastr";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    GridNumberComponent,
    importProvidersFrom(provideFirebaseApp(() => initializeApp(environment.firebaseConfig))),
    importProvidersFrom(provideAuth(() => getAuth())),
    importProvidersFrom(provideFirestore(() => getFirestore())),
    importProvidersFrom(provideMessaging(() => getMessaging())),
    importProvidersFrom(provideStorage(() => getStorage())),
    provideToastr({
      timeOut: 5000,
      positionClass: 'toast-top-center',
    }),
    provideHotToastConfig({
      duration: 7000,
    }),
  ]
};
