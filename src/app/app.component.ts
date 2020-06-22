import { Component, Input } from '@angular/core';
import { ApiService } from './services/api.service';
import { Car } from './models/car.model';
import { People } from './models/people.model';
import { NgForm } from '@angular/forms';

interface CarsPeople extends People {
  cars: Car[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nicks-angular';

  constructor(private _apiService: ApiService){}

  carsPeople: CarsPeople;
  idPeople: string;

  ngOnInit(){
  }

  onSubmit(form: NgForm){

  }
}
