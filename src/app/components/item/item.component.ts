import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {

  @Input() item: any[];
  @Input() navigate: boolean = false;

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    console.log(this.item);
    
  }

  goTo(path: string) {
    if(this.navigate) {
      this.navCtrl.navigateForward(path);
    }
  }

}
