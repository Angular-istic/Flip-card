import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'flip-card',
  templateUrl: './flip-card.component.html',
  styleUrls: ['./flip-card.component.css']
})
export class FlipCardComponent implements OnInit {
  toggleProperty = false;

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.toggleProperty = !this.toggleProperty;
  }


}
