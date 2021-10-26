import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.scss']
})
export class FibonacciComponent implements OnInit {

  public fibInit: number;
  public fibResult: number;

  constructor() { }

  ngOnInit(): void {
  }

  calcFibonacci(c: number) {
    this.fibInit = c;
    this.fibResult = this.fibonacci(this.fibInit);
  }

  public fibonacci(num) {
    if (num == 1 || num == 2) {
      return 1;
    }
    return this.fibonacci(num - 1) + this.fibonacci(num - 2);
  }



}
