import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  @Input() modelname : any ;

  constructor() { }

  ngOnInit(): void {
  }



}
