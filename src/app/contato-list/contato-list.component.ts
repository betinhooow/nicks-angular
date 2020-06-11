import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../services/contato.service';
import { Contato } from '../models/Contato.model';

@Component({
  selector: 'app-contato-list',
  templateUrl: './contato-list.component.html',
  styleUrls: ['./contato-list.component.css']
})
export class ContatoListComponent implements OnInit {

  contatos: Contato[];
  constructor(private contatoService: ContatoService) { }

  ngOnInit(): void {
    this.contatos = this.contatoService.getAll();
  }

}
