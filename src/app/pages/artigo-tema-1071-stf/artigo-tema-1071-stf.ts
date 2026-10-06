import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { WhatsappButton } from '../../components/whatsapp-button/whatsapp-button';

@Component({
  selector: 'app-artigo-tema-1071-stf',
  standalone: true,
  imports: [
    RouterLink,
    Header,
    Footer,
    WhatsappButton
  ],
  templateUrl: './artigo-tema-1071-stf.html',
  styleUrl: './artigo-tema-1071-stf.scss'
})
export class ArtigoTema1071Stf implements OnInit {

  constructor(
    private title: Title,
    private meta: Meta
  ) {}

  ngOnInit() {

    this.title.setTitle(
      'Tema 1.071 do STF: mudança de órgão público pode alterar sua aposentadoria? | Briza Lima Advocacia'
    );

    this.meta.updateTag({
      name: 'description',
      content: 'Entenda o Tema 1.071 do STF e saiba como a mudança entre Município, Estado e União pode interferir na data de ingresso no serviço público e nas regras da aposentadoria.'
    });

    this.meta.updateTag({
      property: 'og:title',
      content: 'Tema 1.071 do STF: mudança de órgão público pode alterar as regras da sua aposentadoria?'
    });

    this.meta.updateTag({
      property: 'og:description',
      content: 'O STF discute qual data deve ser considerada como ingresso no serviço público quando o servidor muda de ente federativo. Entenda os possíveis reflexos previdenciários.'
    });

    this.meta.updateTag({
      property: 'og:url',
      content: 'https://brizalimaadvogada.com.br/artigos/tema-1071-stf-mudanca-orgao-publico-aposentadoria'
    });

    this.meta.updateTag({
      name: 'twitter:title',
      content: 'Tema 1.071 do STF: mudança de órgão público pode alterar sua aposentadoria?'
    });

    this.meta.updateTag({
      name: 'twitter:description',
      content: 'Entenda a discussão do STF sobre a data de ingresso no serviço público e os possíveis impactos na aposentadoria de servidores.'
    });

  }

}