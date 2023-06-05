import { Injectable } from '@angular/core';
import { Planta } from '../models/planta.model';

@Injectable({
  providedIn: 'root',
})
export class PlantasService {
  private plantaGuardada: Planta | null = null;

  constructor() {}

  agregarPlanta(planta: Planta) {
    this.plantaGuardada = planta;
  }

  obtenerPlantaGuardada(): Planta | null {
    return this.plantaGuardada;
  }
}
