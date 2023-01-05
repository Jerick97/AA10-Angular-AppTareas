import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  miLista : any[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  obtenerTarea(values : any) : void{
      this.miLista.push([values.title,values.description]);
    
  }
}
