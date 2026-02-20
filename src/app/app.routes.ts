import { Routes } from '@angular/router';
import { TareasComponent } from './tareas/tareas.component';

export const routes: Routes = [
  { path: 'tareas', component: TareasComponent },
  { path: '', redirectTo: '/tareas', pathMatch: 'full' }
];
