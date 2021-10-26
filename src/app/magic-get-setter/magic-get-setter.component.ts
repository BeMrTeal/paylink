import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-magic-get-setter',
  templateUrl: './magic-get-setter.component.html',
  styleUrls: ['./magic-get-setter.component.scss']
})
export class MagicGetSetterComponent implements OnInit {

  private _newName: string;

  get newName(): string {
    return this._newName;
  }
  @Input()
  set newName(value: string) {
    this._newName = value;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
