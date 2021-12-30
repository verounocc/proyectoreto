import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PersonaService } from './services/persona.service';
import { jsPDF } from 'jspdf';
import domtoimage from 'dom-to-image';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  hide = true;
  @Output() parametrosSeleccionados = new EventEmitter<any>()

  title = 'proyectoreto';
  public personas: Array<any> = []

  imagenseleccionada ='Mediano';

  foto: any[] = [
    {value: this.personas, nombre: 'Pequeño'},
    {value: 'Mediano', nombre: 'Mediano'},
    {value: 'Grande', nombre: 'Grande'},
  ]

  constructor(
    private personaService: PersonaService
  ) {

    this.personaService.getPersonas().subscribe((resp: any) => {
      console.log(resp.results)
      this.personas = resp.results
    })

  }
  ngOnInit(): void {
  }

  position = {
    lat: -34.681,
    lng: -58.371
  };

  label = {
    color: 'red',
    text: ' ',
  }

  buscarImagen(){
    console.log(this.imagenseleccionada); 
    const PARAMETROS ={
      imagen: this.imagenseleccionada,
    }
    this.imagenseleccionada.valueOf()
  }
 

}

