import { Component,OnInit } from '@angular/core';
import { Dato } from '../interface/dato';
import { DatosService } from '../services/datos.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit {
  datos:Dato[] ;
  private url = 'http://127.0.0.1:8000/api';
  constructor(private datosService: DatosService, private httpClient:HttpClient) { 
    httpClient.get(this.url+'/datos').subscribe((data:any)=>{
      this.datos=data;
    })
  }
  
  ngOnInit(): void {
  }
}
//private url = 'http://127.0.0.1:8000/api';
  //constructor( private httpClient:HttpClient) { } 
    //get() {
      // console.log(this.httpClient.get(this.url+'/'))
      //return this.httpClient.get(this.url + '/getall');
    //}
