import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient: HttpClient) { }

  getAllCardData():Observable<any>{
    return this.httpClient.get("https://localhost:7158/getallcars");
  }
}
