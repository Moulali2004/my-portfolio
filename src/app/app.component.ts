import { Component } from '@angular/core';

declare const bootstrap: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Portfolio';
  closeNavbar() {
    const navbar = document.querySelector('.navbar-collapse');
    if (navbar && navbar.classList.contains('show')) {
      new bootstrap.Collapse(navbar).hide();
    }
  }

}
