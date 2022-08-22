import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of,tap } from 'rxjs';
import { Company } from './company';
import { Relation } from './relation';


@Injectable({
  providedIn: 'root'
})
export class RelationService {

  constructor(private http: HttpClient) { }

  getRelationsList():Observable<Company[]>{
    return this.http.get<Company[]>(`http://localhost:3001/company/`).pipe(
      tap((response)=>console.table(response)),
      catchError((error)=>{console.log(error) 
        return of([])})
    )

  }
}
