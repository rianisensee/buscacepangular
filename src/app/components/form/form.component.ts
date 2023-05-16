import { Component } from '@angular/core';
import axios from "axios"
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  isResult:boolean = false
  rua!:string
  bairro!:string
  cidade!:string
  estado!:string
  cepNum!:string
  buscarCEP(value: string) {
    const options = { 
      method: 'GET', 
      url: `http://viacep.com.br/ws/${value}/json/` 
    };
    axios.request(options).then((response)=>{
      this.rua = (response.data.logradouro);
      this.bairro = (response.data.bairro);
      this.cidade = (response.data.localidade);
      this.estado = (response.data.uf);
      this.cepNum=value
      console.log(value)
      this.isResult=true
    }).catch(function (error) {
      console.error(error);
    });
  }

limparCEP(){
  this.isResult=false
  this.cepNum=''
}
}