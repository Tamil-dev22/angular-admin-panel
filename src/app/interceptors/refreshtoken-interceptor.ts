import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const refreshtokenInterceptor: HttpInterceptorFn = (req, next) => {

  return next(req).pipe(catchError((error) => {
    if (error.status === 401) {
      console.log('refresh token')
    }
    return throwError(() => error)
  }));
};
