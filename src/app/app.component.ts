<<<<<<< HEAD
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
=======
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
>>>>>>> eecf7b52b4a2d174365bda98b104d55a042e91a4

@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< HEAD
  imports: [RouterOutlet,CommonModule,RouterLink],
  templateUrl: './app.component.html',
  //styleUrl: './app.component.css'
=======
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
>>>>>>> eecf7b52b4a2d174365bda98b104d55a042e91a4
})
export class AppComponent {
  title = 'Cymetria-Angular-Proyect';
}
