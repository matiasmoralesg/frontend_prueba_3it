import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MusicStyle } from '../model/music-style';
import { Observable } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MusicStyleService {

  private url:string = 'http://localhost:8080/musicStyles';

  constructor(
    private http: HttpClient,
    private router: Router) { }


  getMusicStyles(): Observable<MusicStyle[]> {
    return this.http.get<MusicStyle[]>(this.url +'/list')
  }
}
