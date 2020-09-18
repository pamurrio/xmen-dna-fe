import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputDnaComponent } from './input-dna/input-dna.component';
import { ValidateDnaXmenComponent } from './validate-dna-xmen/validate-dna-xmen.component';
import { InputOnlyDnaDirective } from './directives/input-only-dna.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    InputDnaComponent,
    ValidateDnaXmenComponent,
    InputOnlyDnaDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
