import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slider } from './route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slider],
})
export class AppComponent implements OnInit {
  WindowWidth = window.innerWidth;
  WindowHeight = window.innerHeight;
  ngOnInit() {
    this.SetPosition();
    window.onresize = this.SetPosition;
  }
  SetPosition() {
    const Navbar = document.querySelector<HTMLElement>('.NavbarContainer');
    Navbar.style.maxWidth = JSON.stringify(window.innerWidth) + 'px';
    Navbar.style.top =
      JSON.stringify(window.innerHeight - Navbar.offsetHeight) + 'px';
  }
  PrepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }
}
