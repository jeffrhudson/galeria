import { Component, Input, OnInit } from '@angular/core';
import { Imagem } from 'src/app/core/model/imagem';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() imagem!: Imagem;
  
  constructor() { }

  ngOnInit(): void {
  }

}
