import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray, NgForm, MinLengthValidator } from '@angular/forms';

import { DadosService } from '../../service/dados.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  form: FormGroup
  constructor(private fb: FormBuilder, private dado: DadosService) { }
  loading = false;


  ngOnInit() {

    this.form = this.fb.group({
      title: this.fb.control(''),
      link: this.fb.control(''),
      description: this.fb.control(''),
      tags: this.fb.control('')
    })
  }



  adicionar(){
    this.loading = true;
    let dados = this.form.value;
    var res = dados.tags.split(" ");
    dados.tags = res;
    // console.log("DADOS PARA ADD: ", dados);
    this.dado.add(dados)
      .then(data => {
        this.loading = false;
        // console.log("DADOS ADICIONADOS: ", data);
        location.reload();
      })
      .catch(error => {
        console.log("OPS, Houve um Erro: ", error)
      })
    
  }

}
