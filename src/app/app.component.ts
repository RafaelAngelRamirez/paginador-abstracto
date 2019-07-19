import { Component } from "@angular/core"

import { DatosService } from "./datos.service"
import { PaginadorAbstractoComponent } from "./paginador-abstracto/paginador-abstracto.component"

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  datos: any[] = []

  // limite: number
  // desde: number

  constructor(public _datosService: DatosService) {
    this._datosService.todo().subscribe((datos) => {
      console.log(`datos`, datos)
      this.datos = datos
      let intervaloDeEsperaPaginador = setInterval(() => {
        if (this.paginador) {
          this.paginador.totalDeElementos = this._datosService.total
          this.paginador.inciarPaginador()
          this.paginador.cargandoDatos = false
          clearInterval(intervaloDeEsperaPaginador)
        }
      }, 100)
    })
  }


  cambiarPagina(e) {
    this._datosService.todo(e.limite, e.desde).subscribe((datos) => {
      console.log(`datos`, datos)
      this.datos = datos
      this.paginador.totalDeElementos = this._datosService.total
      this.paginador.cargaDePaginador(false)
    })
  }

  paginador: PaginadorAbstractoComponent = null
}
