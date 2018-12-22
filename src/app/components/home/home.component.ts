import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  items: Array<any> = [];

  constructor() {
    this.items = [
      { name: 'assets/images/thumb1.jpg' },
      { name: 'assets/images/thumb2.jpg' },
      { name: 'assets/images/thumb3.jpg' },
      { name: 'assets/images/thumb4.jpg' },
      { name: 'assets/images/thumb1.jpg' },
      { name: 'assets/images/thumb2.jpg' },
      { name: 'assets/images/thumb3.jpg' },
      { name: 'assets/images/thumb4.jpg' },
    ];
  }

  ngOnInit() {
  }

}
