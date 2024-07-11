import { Component } from '@angular/core';
import { Empleado } from './model/empleado';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  modalVisible = false;
  title = 'comunicacion-componentes';

  empleadosPresnetes: Empleado[] = [
    {
      id: 1,
      nombre: 'matias',
      apellido: 'pellegrineschi'
    },
    {
      id: 2,
      nombre: 'german',
      apellido: 'pellegrineschi'
    },
    {
      id: 3,
      nombre: 'tobias',
      apellido: 'pellegrineschi'
    },
    {
      id: 4,
      nombre: 'bautista',
      apellido: 'pellegrineschi'
    }
  ];
  empleadosUsentes: Empleado[] = [
    {
      id: 5,
      nombre: 'yamila',
      apellido: 'radziwonczyk'
    },
    {
      id: 6,
      nombre: 'bart',
      apellido: 'simpson'
    },
    {
      id: 7,
      nombre: 'juan',
      apellido: 'perez'
    },
    {
      id: 8,
      nombre: 'tobio',
      apellido: 'kasahistan'
    }
  ]

  eliminarEmpleado(idEliminar:number, from: string){

    if(from === 'empleadosPresnetes'){
      this.empleadosPresnetes = this.empleadosPresnetes.filter((empleado)=> empleado.id != idEliminar)  
    }
    
    if(from === 'empleadosUsentes'){
      this.empleadosUsentes = this.empleadosUsentes.filter((empleado)=> empleado.id != idEliminar)
    }
  }

  verDetalle(ev: Empleado){
    alert(`accedio al detalle de ${ev.nombre} ${ev.apellido}`)
  }
}
//pruebas


