import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  media: any = {};
  pop: boolean;
  ok: [];
  constructor() { }

  ngOnInit() {
  }
  envoi() {
    const form = [this.media.adresse, this.media.url, this.media.categorie, this.media.pays, this.media.nutriscore];
    const formS = JSON.stringify(form);
    localStorage.setItem('formContact', formS);
  }
  okF() {
    const ok = localStorage.getItem('formContact');
  }
}
