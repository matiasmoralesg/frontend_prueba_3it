import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';
import { catchError, Observable, throwError } from 'rxjs';
import { Results } from '../model/results';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url:string = 'http://localhost:8080/user';

  constructor(
    private http: HttpClient
  ) { }

  createVoto(user: User): Observable<User>{
    return this.http.post<User>(this.url +'/add', user).pipe(
      catchError(e => {     
        return throwError(() => e);;
      })
    );
  };

  getResults(): Observable<Results[]> {
    return this.http.get<Results[]>(this.url +'/results')
  }
}
