import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  
  return next(req).pipe(catchError((error)=>{
     switch (error.status) {

        case 400:
          alert('Bad Request');
          break;

        case 401:
          alert('Unauthorized');
          break;

        case 403:
          alert('Forbidden');
          break;

        case 404:
          alert('Not Found');
          break;

        case 500:
          alert('Server Error');
          break;

      }
      return throwError(()=>error)
  }))
};
