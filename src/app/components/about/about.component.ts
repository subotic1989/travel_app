import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  @ViewChild('videoPlayer', { static: true }) videoPlayer: ElementRef | any;

  changeSource(src: string) {
    this.videoPlayer.nativeElement.src = src;
  }
}
