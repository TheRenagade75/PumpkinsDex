import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cluster',
  templateUrl: './cluster.component.html'
})
export class ClusterComponent implements OnInit {
  distance = 60;
  points: Array<{ x: number; y: number; }> = [];

  ngOnInit() {
    // Generate random points
    const nbPoints = 2000;
    for (let i = 0; i < nbPoints; ++i) {
      this.points.push({
        x : this.getRandomInRange(0.5, 1.0, 4),
        y: this.getRandomInRange(47.300, 47.500, 4)
      });
    }
  }

  getRandomInRange(from, to, fixed) {
    return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
  }
}
