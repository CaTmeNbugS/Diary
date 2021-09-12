import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RippleEffect } from './scripts';
import { slider } from './route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slider],
})
export class AppComponent implements OnInit {
  ngOnInit() {
    const root = document.documentElement.style;
    root.setProperty('--ClientHeight', window.innerHeight + 'px');
    root.setProperty('--ClientWidth', window.innerWidth + 'px');
    window.onresize = function () {
      root.setProperty('--ClientWidth', window.innerWidth + 'px');
      root.setProperty('--ClientHeight', window.innerHeight + 'px');
    };
    const click = document.querySelectorAll('.click');
    RippleEffect(click);
  }
  PrepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }
}
