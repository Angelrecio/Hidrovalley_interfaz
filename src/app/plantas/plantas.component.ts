import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plantas',
  templateUrl: './plantas.component.html',
  styleUrls: ['./plantas.component.css']
})
export class PlantasComponent {
  plantas = [
    {
      nombre: 'Planta 1',
      horarios: '17:30 - 19:00',
      icono: 'ruta/al/imagen-1.png'
    },
    {
      nombre: 'Planta 2',
      horarios: '10:00 - 12:00',
      icono: 'ruta/al/imagen-2.png'
    },
    // Agrega más objetos de planta según tus necesidades
  ];

  constructor(private router: Router) {}

  mostrarDetalles(planta: any) {
    this.router.navigate(['/path_nueva-planta'], { state: { planta } });
  }
}
