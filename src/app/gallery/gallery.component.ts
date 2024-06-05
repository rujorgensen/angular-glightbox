import { AfterViewInit, Component, InputSignal, input } from '@angular/core';
import GLightbox from 'glightbox';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements AfterViewInit {
  
  public readonly galleries: InputSignal<string[][]> = input.required();

  ngAfterViewInit(): void {
    GLightbox({});
  }
}
