import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  url='http://localhost/'; // disponer url de su servidor que tiene las páginas PHP

  constructor(private http: HttpClient) { }

  recuperarTodos() {
    console.log("recuperartodos service");
    return this.http.get(`${this.url}recuperartodos.php`);
  }

  alta(id:any) {
    return this.http.post(`${this.url}alta.php`, JSON.stringify(id));    
  }

  baja(id:number) {
    return this.http.get(`${this.url}baja.php?codigo=${id}`);
  }
  
  seleccionar(id:number) {
    return this.http.get(`${this.url}seleccionar.php?codigo=${id}`);
  }

  modificacion(id:any) {
    return this.http.post(`${this.url}modificacion.php`, JSON.stringify(id));    
  } 
}