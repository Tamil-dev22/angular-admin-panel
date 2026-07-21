import { HttpClient, HttpContext, HttpHeaders, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { SKIP_AUTH } from '../../../interceptors/http-context';

@Injectable({
  providedIn: 'root',
})
export class User {

  private http = inject(HttpClient);
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  // private httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-type': 'application/json',
  //     Authorization: 'Bearer abc123'
  //   }),
  //   params: new HttpParams()
  //     .set('page', '1')
  //     .set('limit', '5')

  // }

  getUsers() {
    return this.http.get(this.apiUrl, {
      context: new HttpContext().set(SKIP_AUTH, true)
    });
  }
  getUser(id: number) {
    return this.http.get(`${this.apiUrl}/${id}`)
  }
  createUser(user: any) {
    return this.http.post(`${this.apiUrl}`, user);

  }
  updateUser(id: number, user: any) {
    return this.http.put(`${this.apiUrl}/${id}`, user);

  }

  patchUser(id: number, user: any) {
    return this.http.patch(`${this.apiUrl}/${id}`, user);
  }
  deleteUser(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`)
  }

}
