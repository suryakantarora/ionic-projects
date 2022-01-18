import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  backdropVisible = false;
  constructor(
    private cdf: ChangeDetectorRef
  ) {}
  toggleBackdrop(isVisible) {
    this.backdropVisible = isVisible;
    this.cdf.detectChanges();
  }
}
