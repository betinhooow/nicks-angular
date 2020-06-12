import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {
  constructor(private httpClient: HttpClient){}

  getCarsByPeopleId(idPeople: string): Observable<any> {
    return this.httpClient.get(`https://localhost:44339/api/People/${idPeople}`)
  }
}
