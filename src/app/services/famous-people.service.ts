import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FamousPersonModel } from '../models/famous-people';

@Injectable({
  providedIn: 'root'
})
export class FamousPeopleService {

  constructor(private http:HttpClient) { }

  getFamousPeople():Observable<FamousPersonModel> {
    return this.http.get<FamousPersonModel>("https://grandcircusco.github.io/demo-apis/computer-science-hall-of-fame.json");
  }
}
