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
  

  constructor(private carService: CarService, private router : Router) { }

  ngOnInit(): void {
    this.getAllCarDetails();
  }

  // get all car detaisl along with warehouse
  getAllCarDetails(){

    this.AllCarDetails = [];
    this.carService.getAllCardData()
     .subscribe(data=> {
         this.AllCarDetails = data;
     });
    
  }


  // navigate to cars component
  nagivateToCars ()
  {
    this.router.navigate(['cars']);
  }

}
