import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Empleado } from '../../model/empleado';

@Component({
  selector: 'app-empleados-lista',
  templateUrl: './empleados-lista.component.html',
  styleUrl: './empleados-lista.component.scss'
})
export class EmpleadosListaComponent {
  @Input() data: Empleado[] = [];

  @Output() eliminarEmppleado = new EventEmitter();
}
