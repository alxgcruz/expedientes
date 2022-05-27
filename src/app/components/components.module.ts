import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { MenuComponent } from './menu/menu.component';
import { MenuItemComponent } from './menu-item/menu-item.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [
    ListComponent,
    ItemComponent,
    MenuComponent,
    MenuItemComponent
  ],
  exports: [
    ListComponent,
    ItemComponent,
    MenuComponent,
    MenuItemComponent
  ]
})
export class ComponentsModule { }
