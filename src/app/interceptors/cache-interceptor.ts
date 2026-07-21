import { HttpInterceptorFn } from '@angular/common/http';
const cache = new Map();
export const cacheInterceptor: HttpInterceptorFn = (req, next) => {
    if (req.method === 'GET' && cache.has(req.url)) {

    console.log('From Cache');

    return cache.get(req.url);

  }
  return next(req);
};
