import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Imagem } from '../model/imagem';
import { Page } from '../model/page';

@Injectable({
  providedIn: 'root'
})
export class ImagemService {

  url = environment.apiUrl + "imagens";
  
  constructor(private httpClient: HttpClient) { }

  buscarImagens() : Observable<Page<Imagem>>{
    return this.httpClient.get<Page<Imagem>>(this.url+"/buscar");
  }

  cadastrarImagem(body: Imagem) : Observable<Imagem>{
    return this.httpClient.post<Imagem>(this.url, body);
  }
}
