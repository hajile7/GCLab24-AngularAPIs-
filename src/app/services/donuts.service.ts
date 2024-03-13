import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DonutModel } from '../models/donut-model';

@Injectable({
  providedIn: 'root'
})
export class DonutsService {

  constructor(private http:HttpClient) { }

  getDonuts():Observable<DonutModel> {
    return this.http.get<DonutModel>("https://grandcircusco.github.io/demo-apis/donuts.json");
  }


}
