import { Component, OnInit } from '@angular/core';
import { JW_PLAYER_KEY } from './config';
declare var jwplayer: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {
    this.addScript().then(() => {

      const player = jwplayer('player');

      // Initialize JW Player
      player.setup({
        'title': 'Big Buck Bunny',
        'file': 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
        'image': 'assets/img/bg.jpg',
        'height': 360,
        'width': 640
      });

      // Before Play
      player.on('beforePlay', () => {
        console.log('On Before Play.');
      });

      player.on('ready', () => {
        // Play
        player.play();
      });
    });

  }

  addScript(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      const head = document.getElementsByTagName('head')[0];
      const script = document.createElement('script');
      script.innerHTML = `jwplayer.key = "${JW_PLAYER_KEY}"`;
      head.appendChild(script);
      resolve();
    });
  }
}
