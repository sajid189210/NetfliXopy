import { Component, inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-banner',
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent implements OnChanges {
  @Input({ required: true }) bannerTitle: string = '';
  @Input({ required: false }) bannerOverview: string = '';
  @Input() key: string = "klJoTmOhivk";

  private sanitizer = inject(DomSanitizer);
  url: string = `https://www.youtube.com/embed/${this.key}?autoplay=1&mute=1&loop=1&controls=0`;
  videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['key']) {
      this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    }
  }

}
