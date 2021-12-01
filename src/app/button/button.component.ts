import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'avvillas-button',
  template: `
    <button [type]="tipo" [class]="modo" class="villas-button" >
      {{ valor  }}
    </button>
  `,
  styles: [`
    /* tamaño */
    .small {
      width: 289px;
      height: 32px;
    }
    .medium {
      width: 289px;
      height: 48px;
    }
    .large {
      width: 289px;
      height: 64px;
    }
    /* estilo */
    .primary {
      background-image: linear-gradient(82deg, #0014a2 5%, #0048db 100%);
      color: #fff;
    }
    .secondary {
      border: solid 1px #0014a2 !important;
      color: #0014a2;
      background-color: transparent !important;
    }
    /* estados */
    .villas-button {
      border-radius: 32px;
      border: none;
      cursor: pointer;
    }
    .villas-button:hover {
      background-image: linear-gradient(73deg, #001ad4 6%, #0859ff 100%);
      color: #fff;
    }
    .villas-button[disabled="disabled"], .villas-button:disabled {
      background-color: #acbac9;
      cursor: not-allowed;
    }
  `],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ButtonComponent implements OnInit {
  @Input() valor: string;
  @Input() estado: string;
  @Input() tipo: string ;
  @Input() modo: string | string[];
  constructor() {
    this.valor = "Enviar";
    this.estado = "false";
    this.tipo = "submit";
    this.modo = ["primary", "medium"];
   }

  ngOnInit(): void {
  }

}
