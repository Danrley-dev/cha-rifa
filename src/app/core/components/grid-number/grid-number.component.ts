import {Component, OnInit} from '@angular/core';
import {MatGridListModule} from "@angular/material/grid-list";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-grid-number',
  templateUrl: './grid-number.component.html',
  standalone: true,
  imports: [
    MatGridListModule,
    NgForOf
  ],
  styleUrl: './grid-number.component.css'
})
export class GridNumberComponent implements OnInit {
  numbers: number[] = [];

  ngOnInit(): void {
    this.generateNumbers();
  }

  private generateNumbers(): void {
    for (let i = 1; i <= 60; i++) {
      this.numbers.push(i);
    }
  }
}
