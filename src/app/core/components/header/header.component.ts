import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  public icon: string = 'light-mode'
  public textTheme: string = 'tema escuro'
public toggle(){

  const theme = document.body.classList.toggle('dark-theme')

  if(theme) {
    this.textTheme = 'tema claro'
    return this.icon = 'dark-mode'
  }
  this.textTheme = 'tema escuro'
  return this.icon = 'light-mode'
}
}
