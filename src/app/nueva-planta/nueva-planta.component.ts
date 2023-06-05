import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PlantasService } from '../services/plantas.service';

@Component({
  selector: 'app-nueva-planta',
  templateUrl: './nueva-planta.component.html',
  styleUrls: ['./nueva-planta.component.css']
})
export class NuevaPlantaComponent {
  planta = {
    nombre: '',
    phMin: 0,
    phMax: 10,
    minerales: [] as string[],
    luzFase1: 0,
    luzFase2: 0,
    luzFase3: 0,
    descripcion: ''
  };

  macroMinerales: string[] = ['nitrógeno', 'fósforo', 'potasio', 'calcio', 'magnesio'];
  microMinerales: string[] = ['zinc', 'boro', 'molibdeno', 'manganeso', 'cloro', 'cobre'];
  mineralesSeleccionados: { [key: string]: boolean } = {};

  constructor(private router: Router, private plantasService: PlantasService) {}

  guardarPlanta() {
    this.planta.minerales = Object.keys(this.mineralesSeleccionados).filter(
      (key) => this.mineralesSeleccionados[key]
    ) as string[];
    this.plantasService.agregarPlanta(this.planta);
    this.router.navigate(['/plantas']);
  }

  onPhMinChange(event: any) {
    this.planta.phMin = event.target.value;
  }

  onPhMaxChange(event: any) {
    this.planta.phMax = event.target.value;
  }

  onLuzFase1Change(event: any) {
    this.planta.luzFase1 = event.target.value;
  }

  onLuzFase2Change(event: any) {
    this.planta.luzFase2 = event.target.value;
  }

  onLuzFase3Change(event: any) {
    this.planta.luzFase3 = event.target.value;
  }
}
