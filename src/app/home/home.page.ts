import { Component } from '@angular/core';
import Endereco from 'src/app/domain/Endereco'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  enderecos:Array<Object> = []

  ionViewDidEnter() {
    let endereco1 = new Endereco()
    endereco1.rua = 'Rua Cambará'
    endereco1.bairro = 'Jardim Miray'
    endereco1.cidade = 'Itaquaquecetuba'
    endereco1.estado = 'SP'
    endereco1.numero = '866'

    let endereco2 = new Endereco()
    endereco2.rua = 'Rua Alvilândia'
    endereco2.bairro = 'Jardim Caiuby'
    endereco2.cidade = 'Itaquaquecetuba'
    endereco2.estado = 'SP'
    endereco2.numero = '235'


    this.enderecos.push(endereco2)
    this.enderecos.push(endereco1)
  }

}
