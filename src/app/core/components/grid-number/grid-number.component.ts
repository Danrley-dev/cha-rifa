import {Component, OnInit} from '@angular/core';
import {MatGridListModule} from "@angular/material/grid-list";
import {AsyncPipe, NgClass, NgForOf, NgIf} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {LoaderComponent} from "../loader/loader.component";

@Component({
  selector: 'app-grid-number',
  templateUrl: './grid-number.component.html',
  standalone: true,
  imports: [
    MatGridListModule,
    NgForOf,
    NgClass,
    MatButtonModule,
    LoaderComponent,
    AsyncPipe,
    NgIf
  ],
  styleUrl: './grid-number.component.css'
})
export class GridNumberComponent implements OnInit {
  numbers: number[] = Array.from({length: 60}, (_, i) => i + 1);
  selectedNumber: number | null = null;

  selectNumber(number: number): void {
    this.selectedNumber = number;
  }

  ngOnInit(): void {
  }

}
