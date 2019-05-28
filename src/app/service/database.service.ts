import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response, Headers, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
// import 'rxjs/add/operators/map';
// import 'rxjs/add/operators/catch';
// import 'rxjs/add/operators/do';


// const httpOptions = {
//   headers: new HttpHeaders({'Content-Type': 'application/json'})
// }

@Injectable()
export class DatabaseService {


  servidor = "http://localhost:3000";
  // servidor = "http://34.210.80.100:3031";
  // SZOPN1 
  constructor(
    private _http: Http, 
    // private _http: HttpClient, 
    // private session: SessionService,
    // private usuario: SessaoService,
    private router: Router
  ) {

  }
  error(error): any {
    if (error.status == 400)
      error.data = JSON.parse(error._body)

    throw error;
  }

  // headers(){
  //   // let token = this.usuario.sessao['token'];
  //   // let empresa = this.usuario.sessao['empresa'];
  //   httpOptions.headers = new HttpHeaders({'Content-Type': 'application/json'});
  //   return httpOptions;
  // }

  // async get(url){
  //   console.log(`rota: ${url}`);
  //   try{
  //     let resp = await this._http.get(this.servidor + url);
  //     console.log(resp);
  //     return resp
  //   }catch(error){
  //     console.log(error);
  //     if(error.status == 403){
  //       // this.router.navigate(['/login'])
  //     }
  //     throw error;
  //   }
  // }

  // async post(url, data){
  //   console.log(`rota: ${url}`);
  //   console.log(`post:`, data);
  //   try {
  //     let resp = await this._http.post(this.servidor + url, data, this.headers()).toPromise()
  //     console.log(resp);
  //     return resp;
  //   } catch (error) {
  //     console.log(error);
  //     if(error.status == 403){
  //       // this.router.navigate(['/login'])
  //     }
  //     throw error;
  //   }
  // }

  // async delete(url, id){
  //   console.log(`rota: ${url}`);
  //   console.log(`post:`, id);
  //   try {
  //     let resp = await this._http.post(this.servidor + url, id, this.headers()).toPromise()
  //     console.log(resp);
  //     return resp;
  //   } catch (error) {
  //     console.log(error);
  //     if(error.status == 403){
  //       this.router.navigate(['/login'])
  //     }
  //     throw error;
  //   }
  // }

  header(): RequestOptions {
    const headers = new Headers();
    headers.append("Content-type", "application/json")
    // let sessao = JSON.parse(localStorage.getItem('sessao'))
    // console.log("busca sessao: ", sessao)
    // try{
    //   headers.append('empresa', this.session.usuario ?
    //   this.session.usuario.empresa.empresa_id : sessao.empresa.empresa_id);
    // } catch(error){
    //   console.log(error)

    // }

    // try{
    //   headers.append('token', this.session.usuario ?
    //   this.session.usuario.token : sessao.token);
    // } catch(e){
    //   console.log(e)
    // }
   
    // headers.append('empresa', sessao.empresa.empresa_id ? sessao.empresa.empresa_id : '')
    // headers.append('token', sessao.token ? sessao.token : '')
    console.log(headers)
    return new RequestOptions({ headers: headers })
  }


  // getRoot(url) {
  //   console.log(`get: ${url}`)
  //   return this._http.get(url)
  //     .map((response) => response.json())
  //     .do(data => {
  //       console.log('All: ' + JSON.stringify(data))
  //     })
  //     .catch(this.error)
  //     .toPromise();
  // }

  get(url): any {
    console.log(`get: ${url}`)
    return this._http.get(`${this.servidor}${url}`, this.header())
      .pipe(map((response: Response) => response.json()),
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.error))
      .toPromise();

  }

  post(url, dados): any {
    console.log(`URL: ${url}, DADOS:${JSON.stringify(dados)}`)
    return this._http.post(`${this.servidor}${url}`, dados, this.header())
    .pipe(map((response: Response) => response.json()),
    tap(data => console.log('All: ' + JSON.stringify(data))),
    catchError(this.error))
      .toPromise();
  }

  delete(url, id): any {
    console.log(`URL: ${url}, DADOS:${JSON.stringify(id)}`)
    return this._http.post(`${this.servidor}${url}`, id, this.header())
    .pipe(map((response: Response) => response.json()),
    tap(data => console.log('All: ' + JSON.stringify(data))),
    catchError(this.error))
      .toPromise();
  }

}
