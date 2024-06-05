import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  galleries = [
    [
      'assets/images/pexels-cat1.jpg',
      'assets/images/pexels-cat2.jpg',
      'assets/images/pexels-cat3.jpg',
    ],
    [
      'assets/images/pexels-cat4.jpg',
      'assets/images/pexels-cat5.jpg',
      'assets/images/pexels-cat6.jpg',
    ]
  ]
}
