import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/Services/car.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private carService: CarService) { }

  ngOnInit(): void {
  }


  getAllCarDetails(){
    let detVal = "";
     this.carService.getAllCardData()
     .subscribe(event=> {
        let det = event;
     })
    let test = detVal;
  }

}
