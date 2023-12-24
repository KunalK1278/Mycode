import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'myApp01';
  a = 20;
  c!: number; // ! <-- this is used for declaration of property and assining value later
}
