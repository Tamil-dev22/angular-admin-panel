import { HttpInterceptorFn } from '@angular/common/http';
import { finalize } from 'rxjs';

export const loaderInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('Show Loader')

  return next(req).pipe(finalize(() => { console.log("Hide loader") }))
};
