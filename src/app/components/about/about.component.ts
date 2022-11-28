import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  longText = `Hola, mi nombre es Matias. Me apasiona la tecnologia 
  y la ejecución de iniciativas innovadoras de IT. Me considero una persona responsable y proactivo. 
  Mi principal objetivo es llegar a ser arquitecto de sistemas Cloud.
  `;

  expText = `Experiencia en los rubros de banca, 
  seguros y aeronáutico, desarrollando software en entornos agiles basados en arquitecturas monolíticas, microservicios y
  procesos batch.  
  `;

}
