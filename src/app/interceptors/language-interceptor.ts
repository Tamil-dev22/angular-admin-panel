import { HttpInterceptorFn } from '@angular/common/http';

export const languageInterceptor: HttpInterceptorFn = (req, next) => {
  const cloneRequest = req.clone({
    setHeaders:{
      'Accept-Language':'en'
    }
  })
  return next(cloneRequest);
};
