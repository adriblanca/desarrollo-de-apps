import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tareas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tareas.component.html',
  styleUrl: './tareas.component.css'
})
export class TareasComponent {
  tareaTexto: string = '';
  listaTareas: string[] = [];

  agregarTarea() {
    if (this.tareaTexto.trim() === '') {
      return;
    }
    
    this.listaTareas.push(this.tareaTexto);
    this.tareaTexto = '';
  }

  eliminarTarea(index: number) {
    this.listaTareas.splice(index, 1);
  }
}
