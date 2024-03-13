import { Component } from '@angular/core';
import { DonutsService } from '../../services/donuts.service';
import { DonutModel } from '../../models/donut-model';

@Component({
  selector: 'app-donuts',
  standalone: true,
  imports: [],
  templateUrl: './donuts.component.html',
  styleUrl: './donuts.component.css'
})
export class DonutsComponent {
  constructor(private donutsService:DonutsService){}

  donutsResult:DonutModel = {} as DonutModel;

  ngOnInit() {
    this.callApi();
  }

  callApi() {
    this.donutsService.getDonuts().subscribe((response:DonutModel) => {
      console.log(response);
      this.donutsResult = response;
    }); 
  }
}
