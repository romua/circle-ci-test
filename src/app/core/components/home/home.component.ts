import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  numbers: number[] = [];

  constructor() {
    for (let i = 0; i < 100; i++) {
      this.numbers.push(i);
    }
  }

  ngOnInit() {
  }

}
