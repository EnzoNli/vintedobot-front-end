import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar-brand',
  template: `
    <div class="nav-bar__brand">
      <a routerLink="/">
        <img
          class="nav-bar__logo"
          src="assets/logo.png"
          alt="Vintedobot logo"
          width="80"
          style="height: 65px"
        />
      </a>
    </div>
  `,
})
export class NavBarBrandComponent {}
