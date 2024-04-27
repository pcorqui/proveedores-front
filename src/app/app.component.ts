import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'e-Commerce Gapsi';

  constructor(private routes: Router){

  }


  public listaProveedores(){
    this.routes.navigate(['/crear']);
    console.log("algo haces");
  }
}
