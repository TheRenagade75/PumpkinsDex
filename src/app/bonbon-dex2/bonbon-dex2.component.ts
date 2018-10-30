import { Component, OnInit } from '@angular/core';
import { BonbonsService } from '../common/bonbons.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-bonbon-dex2',
  templateUrl: './bonbon-dex2.component.html',
  styleUrls: ['./bonbon-dex2.component.css']
})
export class BonbonDEX2Component implements OnInit {
  bonbons: any[];
  bonbon: any;
  constructor(private service: BonbonsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.service.getBonbons()
      .subscribe(data => {
        this.bonbons = data.products;
        console.log(this.bonbons);
        const id = this.activatedRoute.snapshot.paramMap.get('id');
        this.getBonbonById(id);
      });

  }

  getBonbonById(id) {
    this.bonbon = this.bonbons.find(bonbon => bonbon.id === id);
  }

}
