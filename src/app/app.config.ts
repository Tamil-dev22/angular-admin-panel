import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './interceptors/auth-interceptor';
// import { loggingInterceptor } from './interceptors/logging-interceptor';
// import { errorInterceptor } from './interceptors/error-interceptor';
// import { loaderInterceptor } from './interceptors/loader-interceptor';
// import { languageInterceptor } from './interceptors/language-interceptor';
// import { refreshtokenInterceptor } from './interceptors/refreshtoken-interceptor';
// import { timeoutInterceptor } from './interceptors/timeout-interceptor';
// import { cacheInterceptor } from './interceptors/cache-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient( withInterceptors([

    authInterceptor,

    // loggingInterceptor,

    // errorInterceptor,

    // loaderInterceptor,

    // languageInterceptor,

    // refreshtokenInterceptor,

    // timeoutInterceptor,

    // cacheInterceptor

  ])
)
  ]
};
