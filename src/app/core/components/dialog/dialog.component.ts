import {Component, OnInit} from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatDialogContent, MatDialogRef, MatDialogTitle} from "@angular/material/dialog";
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {Info} from "../../model/info";
import {NgIf} from "@angular/common";

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
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent implements OnInit {
  info: Info = {} as Info;

  constructor(private fb: FormBuilder, private ref: MatDialogRef<DialogComponent>) {
  }

  onSubmit() {
    this.ref.close({info: this.info});
  }

  ngOnInit(): void {
  }

  formControl = this.fb.group(
    {
      nome: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      whatsapp: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(11)]]
    }
  );

}
