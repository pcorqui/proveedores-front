import { Routes } from '@angular/router';
import { CreacionComponentComponent } from './components/creacion-component/creacion-component.component';

export const routes: Routes = [
    //{ path: '', redirectTo: '/inicio', pathMatch: 'full' }, // Ruta de inicio
    { path: 'crear', component: CreacionComponentComponent }, // Ruta al componente de creación
];
