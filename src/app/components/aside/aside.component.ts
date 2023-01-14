import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {
  index !: number;
  realizado : boolean = false;
  @Input()tareas : any[] = [];
  constructor() { }

  ngOnInit(): void {

  }
  estadoTarea(event : any,id:number) {
    if (event.target.checked) {
      // El checkbox ha sido seleccionado
      this.tareas[id].realizado = true; //muestra la etiqueta de realizado
    } else {
      // El checkbox ha sido desmarcado
      this.tareas[id].realizado = false; //oculta la etiqueta de realizado
    }
  }
}
