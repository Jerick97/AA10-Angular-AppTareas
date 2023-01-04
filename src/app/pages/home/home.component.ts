import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  titulo !: string;
  descripcion !: string;

  constructor() { }

  ngOnInit(): void {
  }

  obtenerTarea(title:string, description:string){
    this.titulo = title;
    this.descripcion = description;

    alert(this.titulo + this.descripcion);
  }
}
