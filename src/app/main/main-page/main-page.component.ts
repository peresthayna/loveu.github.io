import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent implements OnInit {
  public imagens: any[] = [];
  public imagemAtual: number = 0
  public dataEspecial = new Date('2020-03-07T19:00:00');
  public diasDesdeDataEspecial: number;
  public horas: number = 0;
  public minutos: number = 0;
  public segundos: number = 0;
  public anos: number = 0;
  public horaAtual: string = '';

  constructor() {}

  ngOnInit() {
    this.atualizarContador();
    setInterval(() => this.atualizarContador(), 1000);
    for(let i = 0; i < 12; i++) {
      this.imagens.push('assets/' + (i+1) + '.jpeg');
    }
    setInterval(() => this.avancar(), 3000);
  }

  avancar() {
    this.imagemAtual = (this.imagemAtual + 1) % this.imagens.length;
  }

  voltar() {
    this.imagemAtual = (this.imagemAtual - 1 + this.imagens.length) % this.imagens.length;
  }

  atualizarContador() {
    const agora = new Date();
    const diffTime = agora.getTime() - this.dataEspecial.getTime();
    const diasTotais = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    this.anos = Math.floor(diasTotais / 365);
    this.diasDesdeDataEspecial = diasTotais % 365;
    this.horas = Math.floor((diffTime / (1000 * 60 * 60)) % 24);
    this.minutos = Math.floor((diffTime / (1000 * 60)) % 60);
    this.segundos = Math.floor((diffTime / 1000) % 60);
    this.horaAtual = agora.toLocaleTimeString();
  }

}
