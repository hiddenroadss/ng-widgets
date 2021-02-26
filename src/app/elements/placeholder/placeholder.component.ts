import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.css']
})
export class PlaceholderComponent implements OnInit {
  @Input() isTitle = true;
  @Input() linesNumber = 5;

  constructor() { }

  ngOnInit(): void {
  }

}
