import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {
  realizado !: string;
  @Input()tareas : any[] = [];
  constructor() { }

  ngOnInit(): void {

  }
  estadoTarea(event : any, tarea : string) {
    if (event.target.checked) {
      // El checkbox ha sido seleccionado
      this.realizado = tarea;
    } else {
      // El checkbox ha sido desmarcado
      this.realizado = "";
    }
  }
}
