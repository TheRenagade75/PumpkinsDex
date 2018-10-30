import { Component, OnInit } from '@angular/core';
import { BonbonsService } from '../common/bonbons.service';

@Component({
  selector: 'app-bonbon-dex1',
  templateUrl: './bonbon-dex1.component.html',
  styleUrls: ['./bonbon-dex1.component.css']
})
export class BonbonDEX1Component implements OnInit {
bonbons: any;
  constructor(private service: BonbonsService) { }

  ngOnInit() {
    this.service.getBonbons()
      .subscribe(data => {
        this.bonbons = data.products;
        console.log(this.bonbons);
      });
  }

}
