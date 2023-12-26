import {Component, OnInit} from '@angular/core';
import {GridNumberComponent} from "../../../components/grid-number/grid-number.component";
import {MatButtonModule} from "@angular/material/button";
import {FirebaseService} from "../../../../service/firebase.service";
import {AsyncPipe, NgIf} from "@angular/common";
import {Observable, of} from "rxjs";
import {Info} from "../../../model/info";
import {MatDialog} from "@angular/material/dialog";
import {DialogComponent} from "../../../components/dialog/dialog.component";
import {HotToastService} from "@ngneat/hot-toast";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    GridNumberComponent,
    MatButtonModule,
    AsyncPipe,
    NgIf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  info$: Observable<Info[]> = of();
  numberSelect: number = 0

  constructor(
    private firebaseService: FirebaseService,
    private dialog: MatDialog,
    private toast: HotToastService,
    private toastr: ToastrService
  ) {
  }

  ngOnInit(): void {
    this.info$ = this.firebaseService.getAllInfo()
    this.info$.subscribe(resp => {
    })
  }

  onClickAdd() {
    if (this.numberSelect == null || this.numberSelect == undefined || this.numberSelect == 0) {
      this.toastr.error("Você precisa escolher um número.", "", {
        progressBar: true, closeButton: true
      })
      return
    }
    const ref = this.dialog.open(DialogComponent, {maxWidth: '350px'});
    ref.componentInstance.numberSelect = this.numberSelect
    ref.afterClosed().subscribe({
      next: (result) => {
        if (result) {
          this.firebaseService
            .addInfo(result.info)
            .pipe(
              this.toast.observe({
                loading: 'Adicionando...',
                error: 'Ocorreu um erro',
                success: 'Salvo com sucesso, em breve você receberá uma mensagem no whatsapp. Boa sorte!'
              })
            )
            .subscribe();
        }
      },
    });
  }

  onSelectNumber(number: number) {
    this.numberSelect = number
  }
}
