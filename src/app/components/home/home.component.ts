import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray, NgForm, MinLengthValidator } from '@angular/forms';

import { DadosService } from './../../service/dados.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  form: FormGroup;
  constructor(private fb: FormBuilder,
              private dados: DadosService ) { }
  loading = false;

  dado: any;

  ngOnInit() {
    this.listaTools()
    
    this.form = this.fb.group({
      busca: this.fb.control(''),
      tipo: this.fb.control('')
    })
  }

  listaTools(){
    this.loading = true;
    this.dados.listTool()
    .then(data => {
      this.loading = false
      this.dado = data
    console.log("Dados: ", data)
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

}
