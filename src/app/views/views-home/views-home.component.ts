import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent implements OnInit {

  stats = [
    {value: 22, label: 'Value' },
    {value: 222, label: 'Reviews' },
    {value: 772, label: 'Numbers' },

  ];

  items = [
    {image: 'assets/images/couch.jpeg', title: 'Couch', description: 'Amazing couch to sit on'},
    {image: 'assets/images/dresser.jpeg', title: 'Dresser', description: 'Amazing dresser, just TOP!'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
