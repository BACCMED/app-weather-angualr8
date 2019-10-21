import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.styl']
})
export class MenuComponent implements OnInit {

  constructor(private apiService:ApiService) {}

  ngOnInit() {
  }

  getWeatherByCity(city)
  {
    this.apiService.getWeatherByCity(city).subscribe((data:any) => {this.apiService.weatherData = data;})
  }
}
