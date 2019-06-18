import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray, NgForm, MinLengthValidator } from '@angular/forms';
import { Router } from '@angular/router';

import { DadosService } from './../../service/dados.service';
import { RemoveComponent } from '../remove/remove.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  form: FormGroup;
  constructor(private fb: FormBuilder,
              private dados: DadosService,
              private rm: RemoveComponent,
              private router: Router ) { }
  loading = false;

  dado: any;
  _tags = [];
  _tagsTg = [];
  _tagsTi = [];

  tipo: any;
  principal: any;

  ngOnInit() {
    this.listaTools()
    
    this.form = this.fb.group({
      busca: this.fb.control(''),
      tipo: this.fb.control('')
    })
  }

// Lista dos Tools - onde é feita a listagem geral de todos os Tools vindo da API.
  listaTools(){
    this.loading = true;
    this.principal = true;
    this.dados.listTool()
    .then(data => {
      this.loading = false
      this.dado = data

    let _d = data
    let tag
    let t
      // console.log("DADOS PARA MAP: ", _d)
      _d.map(item => {
        tag = item.tags
        // console.log("DADOS TAGS: ", tag)
        t = tag.join(' #')
        // console.log("TAGS: ", t )
        this._tags.push(t)
      })
    // console.log("NOVO ARRAY TAGS: ", this._tags)
    })
    .catch(error => {
      console.log(error)
    })
  }
// Fim Lista Tools

  buscar(){
    this.loading = true;
    let dados = this.form.value
    // console.log("Dados de consulta", dados.tipo)
    if(dados.tipo == true){
      // Busca por Tag - Neste primeiro bloco de código, é feita a busca dos Tools pelas tags.
      this.principal = false;
      this.tipo = dados.tipo;
      let tag = dados.busca
      this.dados.listToolTag(tag)
      .then(data => {
        this.loading = false;
        this.dado = data
    // console.log("Dados: ", this.dado)

    let _d = data
    let tag
    let t
      // console.log("DADOS PARA MAP: ", _d)
      _d.map(item => {
        tag = item.tags
        // console.log("DADOS TAGS: ", tag)
        t = tag.join(' #')
        // console.log("TAGS: ", t )
        this._tagsTg.push(t)
      })
    // console.log("NOVO ARRAY TAGS: ", this._tagsTg)
      })
      .catch(error => {
        console.log(error)
      })
    }else if(dados.tipo == false){
      // Busca por Titulo - Neste segundo bloco de código, é feita a busca dos Tools pelo titulo.
      this.principal = false;
      this.tipo = dados.tipo;
      let title = dados.busca
      this.dados.listToolTitle(title)
      .then(data => {
        this.loading = false;
        this.dado = data
    // console.log("Dados: ", this.dado)

    let _d = data
    let tag
    let t
      // console.log("DADOS PARA MAP: ", _d)
      _d.map(item => {
        tag = item.tags
        // console.log("DADOS TAGS: ", tag)
        t = tag.join(' #')
        // console.log("TAGS: ", t )
        this._tagsTi.push(t)
      })
    // console.log("NOVO ARRAY TAGS: ", this._tagsTi)
      })
      .catch(error => {
        console.log(error)
      })
    }

  }

  enviaDados(dado){
    // console.log("ID PARA ENVIAR: ", dado)
   this.dados.dado.popula = true;
   this.dados.dado.id = dado.id;
   console.log("ID: ", dado.id);
   this.dados.dado.title = dado.title;
   console.log("TITULO: ", dado.title)
   this.rm.populaTitle()
  }

}
