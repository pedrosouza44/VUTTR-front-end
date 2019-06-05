import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/do';

import { DatabaseService } from './database.service';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  constructor(
    private data: DatabaseService,
    private http: Http,
    private router: Router) { }

    add(dados){
      return this.data.post(`/tools`, dados)
    }

    remove(id){
      return this.data.delete(`/tools/`, {id})
    }

    listTool(){
      return this.data.get(`/tools`);
    }

    listToolID(id){
      return this.data.get(`/tools?q=${id}`)
    }

    listToolTag(){
      return this.data.get('/tools?tags_like=:busca')
    }


}
