import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  standalone: true,
  imports: [CommonModule, RouterOutlet,RouterLink],
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

}
