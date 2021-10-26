import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fizz-buzz',
  templateUrl: './fizz-buzz.component.html',
  styleUrls: ['./fizz-buzz.component.scss']
})
export class FizzBuzzComponent implements OnInit {

  public checkNumber: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  public onClick(i: number) {
    return this.checkNumber = new Array(i);
  }

}
