import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SecondoComponent } from './secondo/secondo.component';
import { PrimoComponent } from './primo/primo.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PrimoComponent, SecondoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'graziano';
}


