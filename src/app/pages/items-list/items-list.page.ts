import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.page.html',
  styleUrls: ['./items-list.page.scss'],
})
export class ItemsListPage implements OnInit {
  
  empresas: any[];

  constructor() {
    this.empresas = [];
  }

  ngOnInit() {
    this.empresas = [
      {id: 1, nombre: 'Empresa1', path: '/item-detail/1'},
      {id: 2, nombre: 'Empresa2', path: '/item-detail/2'},
      {id: 3, nombre: 'Empresa3', path: '/item-detail/3'},
      {id: 4, nombre: 'Empresa4', path: '/item-detail/4'},
      {id: 5, nombre: 'Empresa5', path: '/item-detail/5'},
    ];
  }
}
