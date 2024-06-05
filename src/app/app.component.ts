import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<app-gallery [gallery]="gallery" />',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  protected readonly gallery: string[] = [
    'assets/images/pexels-cat1.jpg',
    'assets/images/pexels-cat2.jpg',
    'assets/images/pexels-cat3.jpg',
  ];
}
