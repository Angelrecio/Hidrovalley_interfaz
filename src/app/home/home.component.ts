import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  sectores: any[] = [];

  constructor(private dataService: DataService, private router: Router) {
    this.sectores = this.dataService.getSectores();
  }

  redirectToNewSector() {
    this.router.navigateByUrl('/path_newsector');
  }
}
