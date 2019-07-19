import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PaginadorAbstractoComponent } from './paginador-abstracto/paginador-abstracto.component';
import { DatosService } from './datos.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, PaginadorAbstractoComponent ],
  bootstrap:    [ AppComponent ],
  providers: [DatosService]
})
export class AppModule { }
