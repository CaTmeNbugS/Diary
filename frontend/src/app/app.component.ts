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
    const Navbar = document.querySelector<HTMLElement>('.NavbarContainer');
    Navbar.style.maxWidth = JSON.stringify(this.WindowWidth) + 'px';
    Navbar.style.top =
      JSON.stringify(this.WindowHeight - Navbar.offsetHeight) + 'px';
  }
  PrepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }
}
