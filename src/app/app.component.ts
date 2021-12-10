import { Component } from '@angular/core';
import { PersonaService } from './services/persona.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'proyectoreto';
  public personas: Array<any> = []

  constructor(
    private personaService: PersonaService
  ) {

    this.personaService.getPersonas().subscribe((resp: any) => {
      console.log(resp.results)
      this.personas= resp.results
    })

  }
}
