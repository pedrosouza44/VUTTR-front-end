import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray, NgForm, MinLengthValidator } from '@angular/forms';

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
              private rm: RemoveComponent ) { }
  loading = false;

  dado: any;
  _tags = [];

  ngOnInit() {
    this.listaTools()
    // this.splitString(this.tempestString, this.space)
    // console.log("TESTE DE EXIBCAO: ", this._tags)
    
    this.form = this.fb.group({
      busca: this.fb.control(''),
      tipo: this.fb.control('')
    })
  }


  splitString(stringToSplit, separator) {
    var arrayOfStrings = stringToSplit.split(separator);
  
    console.log('A string original é: "' + stringToSplit + '"');
    console.log('O separador é: "' + separator + '"');
    console.log('O array tem ' + arrayOfStrings.length + ' elementos: ' + arrayOfStrings.join(' #'));
  }
  
 tempestString = 'Oh brave new world that has such people in it.';
 monthString = 'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec';
 teste = '';
  
 space = ' ';
 comma = ',';

  listaTools(){
    this.loading = true;
    this.dados.listTool()
    .then(data => {
      this.loading = false
      this.dado = data
    console.log("Dados: ", this.dado)

    let _d = data
    let tag
    let t
      console.log("DADOS PARA MAP: ", _d)
      _d.map(item => {
        tag = item.tags
        console.log("DADOS TAGS: ", tag)
        t = tag.join(' #')
        console.log("TAGS: ", t )
        this._tags.push(t)
      })
    console.log("NOVO ARRAY TAGS: ", this._tags)
    })
    .catch(error => {
      console.log(error)
    })
  }

  buscar(){
    this.loading = true;
    let dados = this.form.value
    // console.log("Dados de consulta", dados.tipo)
    if(dados.tipo == true){
      console.log("Primeiro bloco")
    }else{
      console.log("Segundo Bloco")
    }

  }

  testeID(id){
    console.log("ID: ", id)
    this.rm.testeID(id)
  }

}
