import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatGridListModule} from "@angular/material/grid-list";
import {AsyncPipe, NgClass, NgForOf, NgIf} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {Observable, of} from "rxjs";
import {Info} from "../../model/info";

@Component({
  selector: 'app-grid-number',
  templateUrl: './grid-number.component.html',
  standalone: true,
  imports: [
    MatGridListModule,
    NgForOf,
    NgClass,
    MatButtonModule,
    AsyncPipe,
    NgIf,
    MatInputModule,
    FormsModule
  ],
  styleUrl: './grid-number.component.css'
})
export class GridNumberComponent implements OnInit {
  numbers: number[] = Array.from({length: 60}, (_, i) => i + 1);
  numberSelect: number[] = []
  selectedNumber: number = 0;
  @Output() onSelectNumber: EventEmitter<number> = new EventEmitter<number>()
  @Input() info$: Observable<Info[]> = of()

  selectNumber(number: number): void {
    if (this.numberSelect.some(n => n == number)) return
    this.selectedNumber = number
    this.onSelectNumber.emit(number)
  }

  getTileBackgroundColor(number: number): string {
    if (number >= 1 && number <= 10) {
      return '#6DB8FD';
    } else if (number >= 11 && number <= 35) {
      return '#FFE792';
    } else if (number >= 36 && number <= 60) {
      return '#FFA3F6';
    } else {
      return '';
    }
  }

  existsNumber(number?: number) {
    if (number == null || number == undefined || number == 0) return false
    return this.numberSelect.some(n => n == number);
  }

  ngOnInit(): void {
    this.info$.subscribe(value => {
      this.numberSelect = value.map(info => {
        return Number(info.numeroSelecionado)
      })
    })
  }

}
