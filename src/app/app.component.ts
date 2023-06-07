import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  images = ['code.jpg', 'background-index.jpg', 'path.jpg'];
  headlines = [
    'Bring engineering to the next level',
    'Dont wait for it to get easier, get better',
    'Lets solve togehter',
  ];
  currentImage = 0;
  showImage = true;

  ngOnInit() {
    this.updateImage();
  }

  updateImage() {
    setInterval(() => {
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;
      this.showImage = false;
      setInterval(() => {
        this.showImage = true;
      }, 10);
    }, 8000);
  }
}
