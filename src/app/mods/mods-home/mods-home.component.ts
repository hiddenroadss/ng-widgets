import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {

  modalShown = false;
  items = [
    {title: 'What is it?', content: 'This is something..'},
    {title: 'What is?..', content: 'This is some..'},
    {title: 'What is that?', content: 'That is something2..'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.modalShown = !this.modalShown;
  }

}
