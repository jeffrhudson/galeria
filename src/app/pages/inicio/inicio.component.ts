import { Component, OnInit } from '@angular/core';
import { Imagem } from 'src/app/core/model/imagem';
import { ImagemService } from 'src/app/core/services/imagem.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  listaImagens : Imagem[] | undefined;

  constructor(private imagemService: ImagemService) { }

  ngOnInit(): void {
    this.imagemService.buscarImagens().subscribe(res => {
      this.listaImagens = res.content;
    })
  }

}
