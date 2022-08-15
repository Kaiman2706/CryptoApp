import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { elementAt, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import{Crypto} from '../Crypto'
import { NgModel } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';



@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

@Injectable ({
  providedIn: 'root'
})
export class TestComponent implements OnInit {

  busque: string = "";
  Nome: string[] = [];
  crypt: Crypto[] = [];
  apiUrl = environment.severUrl;

  

  constructor(private _http:HttpClient,){
   }

  ngOnInit(): void {
    // this.GetAll();
    // this.Busca();
  }

  _get(path: string, params: any = {}){
    let param = new HttpParams();
    if(params){
      Object.keys(params).forEach(key =>{
        param = param.append(key, params[key]);
      });
    }
    return this._http.get(path);
  }

  GetAll(): void {
    var data = fetch(this.apiUrl).then(response => response.json())
    const dados = [];

    dados.push(fetch(this.apiUrl).then(response => response.json()))
    Promise.all(dados).then(pokemon => {
        const poke = pokemon.reduce((a,p) => {
          a += `<li>${pokemon}</li>`;
          return a;
        });
        for (let i = 0; i < this.crypt.length; i++) {
          this.crypt[i].name = " ";
        }
        for (let i = 0; i < poke.length; i++) {
          this.crypt.push(poke[i]);
        }
       
        console.log(this.crypt[0]);
        console.log(this.busque)

    })
  }
  
  Busca(): string {
    var a = document.getElementById("txt");
    if(a?.textContent != null){
      return this.busque = a.textContent.toLowerCase();
    } 
    console.log(this.busque);
    return this.busque = "";
  }

  ToString(a: number): string {
    return a.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
  }

 
}


