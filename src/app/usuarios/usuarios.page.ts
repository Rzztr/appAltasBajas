import { Component, OnInit } from '@angular/core';
import { ArticulosService } from '../articulos.service';
import {HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {
  articulos:any;
  art = {
    nombre: "",
    apaterno: "",
    amaterno: "",
    correo: "",
    pssw: "",
    direccion: "",
    num: "",
  }

  
//import { ArticulosService } from '../articulos.service';
  constructor(private articulosServicio: ArticulosService) { }
  
  ngOnInit() {
    console.log("ng OnInit recuperarTodos")
    this.recuperarTodos();
  }

  recuperarTodos() {
    console.log("usuarios.page.ts recuperarTodos");
    this.articulosServicio.recuperarTodos().subscribe((result:any) => {this.articulos = result});
  }

  alta() {
    this.articulosServicio.alta(this.art).subscribe((datos:any) => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });
  }

  baja(id:number) {
    this.articulosServicio.baja(id).subscribe((datos:any) => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });
  }

  modificacion() {
    this.articulosServicio.modificacion(this.art).subscribe((datos:any) => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });    
  }
  
  seleccionar(id:number) {
    this.articulosServicio.seleccionar(id).subscribe((result:any) => this.art = result[0]);
  }

  hayRegistros() {
    return true;
  } 
}
