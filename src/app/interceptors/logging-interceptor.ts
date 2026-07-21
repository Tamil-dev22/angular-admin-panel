import { HttpInterceptorFn } from '@angular/common/http';
import { tap } from 'rxjs';

export const loggingInterceptor: HttpInterceptorFn = (req, next) => {
  console.log(req, "request");
  console.log(req.method)
  console.log(req.url)

  return next(req).pipe(tap({
    next: (data) => console.log(data),
    error: (err) => console.log(err)
  }))
  
};
