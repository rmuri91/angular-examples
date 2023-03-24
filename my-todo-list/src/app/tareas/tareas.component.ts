import { Component } from '@angular/core';
import { Tarea } from '../tarea';
import { TAREAS } from '../mock-tareas';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent {
  tareas = TAREAS;
  selectedTarea?: Tarea;
  onSelect(tarea:Tarea): void {
    this.selectedTarea = tarea;
  }
}
