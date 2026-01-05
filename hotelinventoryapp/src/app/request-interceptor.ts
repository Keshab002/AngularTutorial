import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';

// HttpInterceptorFn is a function that intercepts HTTP requests and responses
// It allows you to modify requests before they are sent to the server
// or to handle responses before they are processed by the application
// This is useful for adding headers, logging, error handling, etc. 
export const requestInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('Request Interceptor - Request made to:', req);
  if (req.method === 'GET') {
    const newReq = req.clone({ headers: new HttpHeaders({ token: 'astala vista baby' }) });
    return next(newReq);
  }
  return next(req);
};
