import { Component } from '@angular/core';
import { DonutsService } from '../../services/donuts.service';
import { DonutModel } from '../../models/donut-model';
import { FamousPeopleService } from '../../services/famous-people.service';
import { FamousPersonModel } from '../../models/famous-people';

@Component({
  selector: 'app-famous-people',
  standalone: true,
  imports: [],
  templateUrl: './famous-people.component.html',
  styleUrl: './famous-people.component.css'
})
export class FamousPeopleComponent {
  constructor(private famousPeopleService:FamousPeopleService){}

  famousPeopleResult:FamousPersonModel = {} as FamousPersonModel;

  ngOnInit() {
    this.callApi();
  }

  callApi() {
    this.famousPeopleService.getFamousPeople().subscribe((response:FamousPersonModel) => {
      console.log(response);
      this.famousPeopleResult = response;
    }); 
  }
}
