import { Component, OnInit } from '@angular/core';
import { GeolocationService } from '../common/geolocation.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cluster',
  templateUrl: './cluster.component.html'
})
export class ClusterComponent implements OnInit {
  distance = 60;
  points: Array<{ x: number; y: number; }> = [];
  position: string;
  zoom = 12;
  closeResult: string;

  constructor(private geolocationService: GeolocationService, private modalService: NgbModal) {
  }

  ngOnInit() {
    // Generate random points
    const nbPoints = 400;
    for (let i = 0; i < nbPoints; ++i) {
      this.points.push({
        x : this.getRandomInRange(0.5, 1.00, 4),
        y: this.getRandomInRange(47.300, 47.500, 4)
      });
    }
  }

  getRandomInRange(from, to, fixed) {
    return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
