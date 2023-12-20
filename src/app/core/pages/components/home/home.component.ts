import {Component, OnInit} from '@angular/core';
import {GridNumberComponent} from "../../../components/grid-number/grid-number.component";
import {MatButtonModule} from "@angular/material/button";
import {FirebaseService} from "../../../../service/firebase.service";
import {LoaderComponent} from "../../../components/loader/loader.component";
import {AsyncPipe, NgIf} from "@angular/common";
import {Observable} from "rxjs";
import {Info} from "../../../model/info";
import {MatDialog} from "@angular/material/dialog";
import {DialogComponent} from "../../../components/dialog/dialog.component";

@Component({
  selector: 'app-home',
  standalone: true,
    imports: [
        GridNumberComponent,
        MatButtonModule,
        LoaderComponent,
        AsyncPipe,
        NgIf
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  info$?: Observable<Info[]>;

  constructor(private firebaseService: FirebaseService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.info$ = this.firebaseService.getAllInfo()
  }

  onClickAdd() {
    const ref = this.dialog.open(DialogComponent, {maxWidth: '350px'});
    ref.afterClosed().subscribe({
      next: (result) => {
        if (result) {
          this.firebaseService
            .addInfo(result.info)
            // .pipe(
            //   this.toast.observe({
            //     loading: 'Adicionando...',
            //     error: 'Ocorreu um erro',
            //     success: 'Diário adicionado',
            //   })
            // )
            .subscribe();
        }
      },
    });
  }

}
