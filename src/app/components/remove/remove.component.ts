import { Component, OnInit } from '@angular/core';

import { DadosService } from '../../service/dados.service';

@Component({
  selector: 'app-remove',
  templateUrl: './remove.component.html',
  styleUrls: ['./remove.component.css']
})
export class RemoveComponent implements OnInit {


  constructor(private dado: DadosService) {
    this.populaTitle();
    
   }
loading = false;

// titulo = [];
titulo = 'TESTE';
dados: any;

  ngOnInit() {
  }

  populaTitle(){
    let titulo = this.dado.dado.title;
    this.titulo = titulo;
    // this.titulo = titulo;
    console.log("TESTE DE TITLE: ", this.titulo)
  }

  remover(){
    let id = this.dado.dado.id
    // console.log("ID PARA SER REMOVIDO: ", id)
    this.dado.remove(id)
      .then(data => {
        this.loading = false;
        console.log("TOOL REMOVIDO COM SUCESSO!")
        location.reload();
      })
      .catch(error => console.log(error))
  }

}
