import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-appbar',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.css']
})
export class AppbarComponent {
  constructor(private router: Router) { }
  redirectToHomePage() {
    this.router.navigateByUrl('/path_home');
  }
}
