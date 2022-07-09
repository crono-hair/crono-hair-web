import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalidadeService {

  constructor(
    private http: HttpClient
  ) { }


  getEndereco(cep: string) {
    return this.http.get<ViaCEP>(`https://viacep.com.br/ws/${cep}/json/`)
  }

  getEstados() {
    return this.http.get<Estado[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados`)
  }

  getCidades() {
    return this.http.get<Cidade[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/municipios?orderBy=nome`)
  }

  getCidadesPorEstado(estadoId: string) {
    return this.http.get<Cidade[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoId}/municipios`)
  }
}

export class Estado {
  id: string = '';
  nome: string = '';
  sigla: string = '';
  regiao: EstadoRegiao = new EstadoRegiao;
}

export class EstadoRegiao {
  id: string = '';
  nome: string = '';
  sigla: string = '';
}

export class Cidade {
  id: string = '';
  nome: string = '';
  microrregiao: Microrregiao = new Microrregiao;
}

export class Microrregiao {
  id: string = '';
  nome: string = '';
  mesorregiao: Mesorregiao = new Mesorregiao;
}

export class Mesorregiao {
  id: string = '';
  nome: string = '';
  uf: Estado = new Estado;
}

export class ViaCEP {
  cep: string = '';
  logradouro: string = '';
  complemento: string = '';
  bairro: string = '';
  localidade: string = '';
  uf: string = '';
  ibge: string = '';
  gia: string = '';
  ddd: string = '';
  siafi: string = '';
}