import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {
  currentIndex = 0;
  @Input() items = [];

  constructor() { }

  ngOnInit(): void {
  }

  onClick(index: number) {
    this.currentIndex = index;
  }

}
