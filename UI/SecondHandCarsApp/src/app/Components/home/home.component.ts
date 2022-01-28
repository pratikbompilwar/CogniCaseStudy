import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/Services/car.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  AllCarDetails : any[] = [];
  AllVehicleDetails : any[] = [];
  

  constructor(private carService: CarService, private router : Router) { }

  ngOnInit(): void {
    this.getAllCarDetails();
    this.getAllVehicleDetails();
  }

  // get all warehouse details along with cars
  getAllCarDetails(){

    this.AllCarDetails = [];
    this.carService.getAllCarsData()
     .subscribe(data=> {
         this.AllCarDetails = data;
     });
    
  }

  // get all vehicle details along with warehouse
  getAllVehicleDetails(){

    this.AllVehicleDetails = [];
    this.carService.getAllVehicleData()
     .subscribe(data=> {
         this.AllVehicleDetails = data;
     });
    
  }


  // navigate to cars component
  nagivateToCars ()
  {
    this.router.navigate(['cars']);
  }

}
