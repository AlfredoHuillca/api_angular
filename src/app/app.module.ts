import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Route, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { DatosComponent } from './datos/datos.component';
import { HttpClientModule } from '@angular/common/http';

const routers:Route[] =[
  {path:'', component:AppComponent},
  {path:'home', component:AppComponent},
  {path:'form', component:AppComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    DatosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routers),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
