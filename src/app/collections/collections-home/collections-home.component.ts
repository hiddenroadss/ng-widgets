import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {

  data = [
    {name: 'Alan', age: 22, job: 'Designer'},
    {name: 'Coly', age: 30, job: 'Programmer'},
    {name: 'Terry', age: 25, job: 'Developer'}
  ];
  headers = [
    {key: 'name', label: 'Name'},
    {key: 'age', label: 'Age'},
    {key: 'job', label: 'Job'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
