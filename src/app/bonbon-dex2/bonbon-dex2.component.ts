import { Component, OnInit } from '@angular/core';
import { BonbonsService } from '../common/bonbons.service';

@Component({
  selector: 'app-bonbon-dex2',
  templateUrl: './bonbon-dex2.component.html',
  styleUrls: ['./bonbon-dex2.component.css']
})
export class BonbonDEX2Component implements OnInit {

  constructor(private service: BonbonsService) { }

  ngOnInit() {
    this.service.getBonbons()
      .subscribe(data => {
        const bonbons = data;
        console.log(bonbons);
      });
  }

}
