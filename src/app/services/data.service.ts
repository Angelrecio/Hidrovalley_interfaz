import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  sectores: any[] = [];

  addSector(sector: any) {
    this.sectores.push(sector);
  }

  getSectores() {
    return this.sectores;
  }
}