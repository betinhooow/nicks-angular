import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Observable } from 'rxjs';
import { PeopleCars } from '../interfaces/IPeopleCar';

@Injectable()
export class ApiService {
  constructor(private httpClient: HttpClient){}

  getCarsByPeopleId(idPeople: string): Promise<PeopleCars> {

    return fetch(`https://localhost:44339/api/People/${idPeople}`).then(r => r.json()).then(j => { return j });

  }
}
