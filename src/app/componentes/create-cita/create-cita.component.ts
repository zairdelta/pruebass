import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SharedService } from '../../services/shared/shared.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-cita',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './create-cita.component.html',
  styleUrl: './create-cita.component.css',
})
export class CreateCitaComponent {
  num = 0;
  @Input() valor: number = 0;
  @Output() valor1: EventEmitter<number> = new EventEmitter<number>();
  constructor(public sharedService: SharedService) {}

  incrementar() {
    this.valor1.emit(this.num + 1);
    this.num++;
  }
}
