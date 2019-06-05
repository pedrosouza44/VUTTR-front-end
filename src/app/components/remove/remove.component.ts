import { Component, OnInit } from '@angular/core';

import { DadosService } from '../../service/dados.service';

@Component({
  selector: 'app-remove',
  templateUrl: './remove.component.html',
  styleUrls: ['./remove.component.css']
})
export class RemoveComponent implements OnInit {
  title: any;

  constructor(private dado: DadosService) { }
loading = false;

  ngOnInit() {
  }

  testeID(id){
    console.log("ID REMOVE: ", id)
    this.loading = true;
    this.dado.listToolID(id)
      .then(data => {
        this.loading = false
        console.log("DADOS POR ID: ", data)
        let t
        // d = data
        data.map(item => {
          // let t
          // item.title = this.dados
          t = item.title
        })
        this.title = t
        console.log("TITLE: ", this.title)
      })
      .catch(error => {
        this.loading = true
        console.log(error)
      })
  }

}
