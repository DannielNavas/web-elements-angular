import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';

export interface inputOptions {
  tipo:        string;
  requeridp:    boolean;
  textoBase: string;
  minimo:   number;
  maximo:   number;
}

@Component({
  selector: 'avvillas-input',
  template: `
    <input [type]="tipo" [required]="requerido" [placeholder]="textobase" [minLength]="minimo" [maxLength]="maximo" [name]="nombre" class="input_basic"/>
  `,
  styles: [`
    .input_basic {
      height: 56px;
      width: 100%;
      max-width:561px;
      border-radius: 4px;
      border: solid 1px #acbac9;
    }
    .input_basic:focus-visible {
      border-bottom: solid 1px #0048db !important;
      outline: none;
    }
    ` ],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class InputComponent implements OnInit {
  @Input() tipo: string;
  @Input() requerido: boolean;
  @Input() textobase: string;
  @Input() minimo: number;
  @Input() maximo: number;
  @Input() nombre: string;

  constructor() {
    this.tipo = 'text';
    this.requerido = false;
    this.textobase = "";
    this.minimo = 0;
    this.maximo = 0;
    this.nombre = "";
  }

  ngOnInit(): void {
  }

}
