import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SharedService } from './services/shared/shared.service';
import { CreateCitaComponent } from './componentes/create-cita/create-cita.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CreateCitaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(public sharedService: SharedService) {
    this.sharedService.variable.subscribe((res: any) => {
      console.log(res, 'VARIABLE');
    });
    this.sharedService.variable1.subscribe((res: any) => {
      console.log(res, 'VARIALE 1');
    });
  }

  manejarEvento(event: any) {
    console.log(event, 'MANEJAR EVENTO ');
  }
  title = 'ejemplo';
}
