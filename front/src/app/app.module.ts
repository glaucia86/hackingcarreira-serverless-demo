import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faEdit, faTrash, faUserPlus } from '@fortawesome/free-solid-svg-icons';


import { PalestranteAddComponent } from './palestrante-add/palestrante-add.component';
import { PalestranteGetComponent } from './palestrante-get/palestrante-get.component';
import { PalestranteEditComponent } from './palestrante-edit/palestrante-edit.component';
import { PalestranteService } from './palestrante.service';

@NgModule({
  declarations: [
    AppComponent,
    PalestranteAddComponent,
    PalestranteGetComponent,
    PalestranteEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ PalestranteService ],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(library: FaIconLibrary) {

    library.addIcons(faEdit, faTrash, faUserPlus);
  }
}
