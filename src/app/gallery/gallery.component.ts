import { AfterViewInit, Component, InputSignal, input } from '@angular/core';
import GLightbox from 'glightbox';

@Component({
  selector: 'lib-glightbox',
  standalone: true,
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements AfterViewInit {

  public readonly gallery: InputSignal<string[]> = input.required();

  ngAfterViewInit(): void {
    GLightbox({});
  }
}
