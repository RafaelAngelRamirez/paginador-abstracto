import { Injectable } from "@angular/core"
import { Dato } from "./dato"
import { Observable, throwError } from "rxjs"
import { map, catchError } from "rxjs/operators"

@Injectable()
export class DatosService {
  constructor() {
     
  }

  limite: number = 5
  desde: number = 0
  total: number = 0

  public todo(limite: number = 5, desde: number = 1): Observable<Dato[]> {
    this.limite = limite
    this.desde = desde
    let o = new Observable<Dato[]>(this.generarDatos).pipe(
      map(this.mapRespuesta),
      catchError(this.error)
    )

    return o
  }

  mapRespuesta = (resp: any) => {
    this.total = resp.total
    return resp.datos
  }

  error = (err) => {
    return throwError(err)
  }
  generarDatos = (observer) => {
    let espera = Math.random() * 6 * 1000
    console.log("Comienza la espera..." + espera)
    setTimeout(() => {
      let dat: Dato[] = []
      console.log("Estamos en el obserbable")

      this.datos
        .slice(this.desde - 1, this.desde - 1 + this.limite)
        .map((d) => {
          let a = new Dato()
          a.nombre = d.nombre
          a.edad = d.edad
          a.numero = d.numero
          dat.push(a)
        })
      let respuesta = { total: this.datos.length, datos: dat }

      console.log(`Lo que se va a mandar`, respuesta)
      observer.next(respuesta)
      return { unsubscribe() {} }
    }, espera)
  }

  datos = [
   
    {
      numero: 1,
      nombre: "ALICIA",
      edad: 4
    },
    {
      numero: 2,
      nombre: "A",
      edad: 1
    },
    {
      numero: 3,
      nombre: "A",
      edad: 4
    },
    {
      numero: 4,
      nombre: "GUADALUPE",
      edad: 5
    },
    {
      numero: 5,
      nombre: "MAR",
      edad: 6
    },
    {
      numero: 6,
      nombre: "JAIME",
      edad: 8
    },
    {
      numero: 7,
      nombre: "CARLOS",
      edad: 5
    },
    {
      numero: 8,
      nombre: "DE",
      edad: 4
    },
    {
      numero: 9,
      nombre: "ANTONIO",
      edad: 4
    },
    {
      numero: 10,
      nombre: "S",
      edad: 4
    },
    {
      numero: 11,
      nombre: "ANDREA",
      edad: 1
    },
    {
      numero: 12,
      nombre: "MAR",
      edad: 3
    },
    {
      numero: 13,
      nombre: "RUBEN",
      edad: 4
    },
    {
      numero: 14,
      nombre: "CARMEN",
      edad: 2
    },
    {
      numero: 15,
      nombre: "GABRIELA",
      edad: 2
    },
    {
      numero: 16,
      nombre: "NGEL",
      edad: 3
    },
    {
      numero: 17,
      nombre: "MARIO",
      edad: 8
    },
    {
      numero: 18,
      nombre: "ARMANDO",
      edad: 5
    },
    {
      numero: 19,
      nombre: "MARTHA",
      edad: 1
    },
    {
      numero: 20,
      nombre: "CARMEN",
      edad: 1
    },
    {
      numero: 21,
      nombre: "JUAN",
      edad: 0
    },
    {
      numero: 22,
      nombre: "JOS",
      edad: 1
    },
    {
      numero: 23,
      nombre: "JOS",
      edad: 9
    },
    {
      numero: 24,
      nombre: "GABRIELA",
      edad: 7
    },
    {
      numero: 25,
      nombre: "CARMEN",
      edad: 1
    },
    {
      numero: 26,
      nombre: "ARMANDO",
      edad: 0
    },
    {
      numero: 27,
      nombre: "SERGIO",
      edad: 5
    },
    {
      numero: 28,
      nombre: "DE",
      edad: 8
    },
    {
      numero: 29,
      nombre: "MARTHA",
      edad: 8
    },
    {
      numero: 30,
      nombre: "A",
      edad: 0
    },
    {
      numero: 31,
      nombre: "LUC",
      edad: 1
    },
    {
      numero: 32,
      nombre: "A",
      edad: 1
    },
    {
      numero: 33,
      nombre: "MAR",
      edad: 9
    },
    {
      numero: 34,
      nombre: "JAVIER",
      edad: 0
    },
    {
      numero: 35,
      nombre: "ALFREDO",
      edad: 0
    },
    {
      numero: 36,
      nombre: "CESAR",
      edad: 6
    },
    {
      numero: 37,
      nombre: "LETICIA",
      edad: 1
    },
    {
      numero: 38,
      nombre: "JUAN",
      edad: 2
    },
    {
      numero: 39,
      nombre: "ALICIA",
      edad: 1
    },
    {
      numero: 40,
      nombre: "A",
      edad: 6
    },
    {
      numero: 41,
      nombre: "TERESA",
      edad: 0
    },
    {
      numero: 42,
      nombre: "MAR",
      edad: 3
    },
    {
      numero: 43,
      nombre: "RUBEN",
      edad: 2
    },
    {
      numero: 44,
      nombre: "DE",
      edad: 2
    },
    {
      numero: 45,
      nombre: "MARCO",
      edad: 1
    },
    {
      numero: 46,
      nombre: "A",
      edad: 7
    },
    {
      numero: 47,
      nombre: "MAR",
      edad: 5
    },
    {
      numero: 48,
      nombre: "JES",
      edad: 4
    },
    {
      numero: 49,
      nombre: "JORGE",
      edad: 2
    },
    {
      numero: 50,
      nombre: "DAVID",
      edad: 4
    },
    {
      numero: 51,
      nombre: "JOS",
      edad: 1
    },
    {
      numero: 52,
      nombre: "ROSARIO",
      edad: 1
    },
    {
      numero: 53,
      nombre: "S",
      edad: 7
    },
    {
      numero: 54,
      nombre: "A",
      edad: 0
    },
    {
      numero: 55,
      nombre: "CARMEN",
      edad: 0
    },
    {
      numero: 56,
      nombre: "DE",
      edad: 5
    },
    {
      numero: 57,
      nombre: "JAVIER",
      edad: 1
    },
    {
      numero: 58,
      nombre: "FRANCISCA",
      edad: 1
    },
    {
      numero: 59,
      nombre: "GLORIA",
      edad: 0
    },
    {
      numero: 60,
      nombre: "ANTONIO",
      edad: 2
    },
    {
      numero: 61,
      nombre: "RAFAEL",
      edad: 5
    },
    {
      numero: 62,
      nombre: "SANTIAGO",
      edad: 9
    },
    {
      numero: 63,
      nombre: "TERESA",
      edad: 3
    },
    {
      numero: 64,
      nombre: "A",
      edad: 9
    },
    {
      numero: 65,
      nombre: "MAR",
      edad: 7
    },
    {
      numero: 66,
      nombre: "YOLANDA",
      edad: 0
    },
    {
      numero: 67,
      nombre: "ADRIANA",
      edad: 1
    },
    {
      numero: 68,
      nombre: "RAFAEL",
      edad: 5
    },
    {
      numero: 69,
      nombre: "MAR",
      edad: 6
    },
    {
      numero: 70,
      nombre: "LUC",
      edad: 3
    },
    {
      numero: 71,
      nombre: "MARIO",
      edad: 4
    },
    {
      numero: 72,
      nombre: "A",
      edad: 6
    },
    {
      numero: 73,
      nombre: "MAR",
      edad: 0
    },
    {
      numero: 74,
      nombre: "JOSEFINA",
      edad: 7
    },
    {
      numero: 75,
      nombre: "GABRIEL",
      edad: 5
    },
    {
      numero: 76,
      nombre: "MIGUEL",
      edad: 0
    },
    {
      numero: 77,
      nombre: "MAR",
      edad: 6
    },
    {
      numero: 78,
      nombre: "LUZ",
      edad: 4
    },
    {
      numero: 79,
      nombre: "JOS",
      edad: 5
    },
    {
      numero: 80,
      nombre: "V",
      edad: 7
    },
    {
      numero: 81,
      nombre: "A",
      edad: 6
    },
    {
      numero: 82,
      nombre: "JAVIER",
      edad: 7
    },
    {
      numero: 83,
      nombre: "A",
      edad: 5
    },
    {
      numero: 84,
      nombre: "IRMA",
      edad: 0
    },
    {
      numero: 85,
      nombre: "JUAN",
      edad: 4
    },
    {
      numero: 86,
      nombre: "GABRIELA",
      edad: 6
    },
    {
      numero: 87,
      nombre: "GUADALUPE",
      edad: 7
    },
    {
      numero: 88,
      nombre: "ROSA",
      edad: 0
    },
    {
      numero: 89,
      nombre: "JES",
      edad: 2
    },
    {
      numero: 90,
      nombre: "GUADALUPE",
      edad: 2
    },
    {
      numero: 91,
      nombre: "MAR",
      edad: 3
    },
    {
      numero: 92,
      nombre: "MART",
      edad: 5
    },
    {
      numero: 93,
      nombre: "MAR",
      edad: 4
    },
    {
      numero: 94,
      nombre: "A",
      edad: 2
    },
    {
      numero: 95,
      nombre: "FRANCISCO",
      edad: 8
    },
    {
      numero: 96,
      nombre: "DIEGO",
      edad: 7
    },
    {
      numero: 97,
      nombre: "MIGUEL",
      edad: 0
    },
    {
      numero: 98,
      nombre: "ANDR",
      edad: 5
    },
    {
      numero: 99,
      nombre: "MANUEL",
      edad: 7
    },
    {
      numero: 100,
      nombre: "MARIO",
      edad: 5
    },
  ]
}
