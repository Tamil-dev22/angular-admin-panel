import { HttpHeaders, HttpInterceptorFn, HttpParams } from '@angular/common/http';
import { SKIP_AUTH } from './http-context';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // if (req.context.get(SKIP_AUTH)) {

  //   return next(req);
  // }

  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Bearer abc123'
  });

  // const params = new HttpParams().set('page', '1').set('limit', '5');

  const cloneRequest = req.clone({
    headers,
    // params
  })
  return next(cloneRequest);
};
