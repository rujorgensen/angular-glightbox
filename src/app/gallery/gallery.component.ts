import { AfterViewInit, Component } from '@angular/core';
import GLightbox from 'glightbox';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements AfterViewInit {
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

  ngAfterViewInit(): void {
    GLightbox({});
  }
}
