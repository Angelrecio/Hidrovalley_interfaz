import { Component, Inject } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newsector',
  templateUrl: './newsector.component.html',
  styleUrls: ['./newsector.component.css']
})
export class NewsectorComponent {

  name: string = '';
  option: string = '';
  liters: number = 0;
  comment: string = '';
  imageFile: File | undefined;
  selectedImage: File | null = null;
  imagePreview: string | ArrayBuffer | null = null;

  constructor(@Inject(DataService) private dataService: DataService, private router: Router) { }

  goBack() {
    this.router.navigateByUrl('/path_home');  
  }

  onImageChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files[0]) {
      this.selectedImage = inputElement.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(this.selectedImage);
    } else {
      this.selectedImage = null;
      this.imagePreview = null;
    }
  }

  saveData() {
    // Implementa la lógica para guardar los datos y añadirlos a los rectángulos del home
    const newData = {
      name: this.name,
      option: this.option,
      liters: this.liters,
      comment: this.comment,
      image: this.imageFile
    };
    this.dataService.addSector(newData);
  }
}
