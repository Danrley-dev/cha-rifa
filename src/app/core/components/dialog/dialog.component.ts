import {Component, OnInit} from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatDialogContent, MatDialogRef, MatDialogTitle} from "@angular/material/dialog";
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {Info} from "../../model/info";

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [
    MatIconModule,
    MatInputModule,
    MatDatepickerModule,
    MatDialogContent,
    MatDialogTitle,
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent implements OnInit {
  info: Info = {} as Info;

  constructor(private ref: MatDialogRef<DialogComponent>) {
  }

  onSubmit() {
    this.ref.close({info: this.info});
  }

  ngOnInit(): void {
  }

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

}
