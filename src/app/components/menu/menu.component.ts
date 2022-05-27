import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = [
      {id: 1, label: 'Option 1', url: ''},
      {id: 2, label: 'Option 2', url: ''},
      {id: 3, label: 'Option 3', url: ''},
    ]
  }

}
