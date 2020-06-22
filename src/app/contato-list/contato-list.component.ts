import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { PeopleCars } from '../interfaces/IPeopleCar';

@Component({
  selector: 'app-contato-list',
  templateUrl: './contato-list.component.html',
  styleUrls: ['./contato-list.component.css']
})
export class ContatoListComponent implements OnInit {

  public peopleCars: PeopleCars;
  public activeTab: number

  constructor(
    private route: ActivatedRoute,
    private _apiService: ApiService
  ) {}

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.getPeopleCar(id);
    this.activeTab = 0;
  }

  async getPeopleCar(id: string){
    this.peopleCars = await this._apiService.getCarsByPeopleId(id).then(data => this.peopleCars = data);
    console.log(this.peopleCars)
  }

  onClick(idx) {
    this.activeTab = idx;
  }

}
