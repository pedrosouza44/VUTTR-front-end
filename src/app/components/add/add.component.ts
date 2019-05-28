import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray, NgForm, MinLengthValidator } from '@angular/forms';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  form: FormGroup
  constructor(private fb: FormBuilder) { }
  loading = false;

  ngOnInit() {

    this.form = this.fb.group({
      title: this.fb.control(''),
      link: this.fb.control(''),
      description: this.fb.control(''),
      tags: this.fb.array([this.fb.control('')])
    })
  }

  adicionar(){
    this.loading = true;
    let dados = this.form.value;
    console.log("DADOS PARA ADD: ", dados);
  }

}
