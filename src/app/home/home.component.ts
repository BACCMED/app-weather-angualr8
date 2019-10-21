import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl']
})
export class HomeComponent implements OnInit {

  weatherData;
  constructor(public apiService:ApiService) { }

  ngOnInit() {
    this.apiService.getWeather().subscribe((data:any) => {
      this.apiService.weatherData = data
      console.log(data)
    });
  }

}
