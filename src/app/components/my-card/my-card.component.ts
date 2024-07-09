import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Empleado } from '../../model/empleado';

@Component({
  selector: 'app-my-card',
  templateUrl: './my-card.component.html',
  styleUrl: './my-card.component.scss'
})
export class MyCardComponent {
  @Input({required:true}) empleado!: Empleado;

  @Output() verDetalle = new EventEmitter();
}
