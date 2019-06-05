import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { AppRoutingModule } from './/app-routing.module';

import { HomeComponent } from './components/home/home.component';
import { AddComponent } from './components/add/add.component';

import { DatabaseService } from './service/database.service';
import { DadosService } from './service/dados.service';
import { RemoveComponent } from './components/remove/remove.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
    AddComponent,
    RemoveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [DatabaseService, DadosService, RemoveComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
