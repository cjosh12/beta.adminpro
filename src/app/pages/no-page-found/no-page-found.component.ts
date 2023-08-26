import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-no-page-found',
  templateUrl: './no-page-found.component.html',
  styleUrls: ['./no-page-found.component.css'
  ]
})
export class NoPageFoundComponent {
  //forma tradicional
  //year = new Date().getFullYear();

  //signal
  public year = signal<number>(new Date().getFullYear());
}
