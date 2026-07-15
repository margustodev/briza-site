import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { WhatsappButton } from '../../components/whatsapp-button/whatsapp-button';

@Component({
  selector: 'app-artigo-stf-aposentadoria-especial',
  standalone: true,
  imports: [
    RouterLink,
    Header,
    Footer,
    WhatsappButton
  ],
  templateUrl: './artigo-stf-aposentadoria-especial.html',
  styleUrl: './artigo-stf-aposentadoria-especial.scss'
})
export class ArtigoStfAposentadoriaEspecial implements OnInit {

  constructor(
    private title: Title,
    private meta: Meta
  ) {}

  ngOnInit() {
    this.title.setTitle(
      'STF derruba idade mínima da aposentadoria especial | Briza Lima Advocacia'
    );

    this.meta.updateTag({
      name: 'description',
      content: 'Entenda quem pode ter direito à aposentadoria especial após decisão do STF que derrubou a exigência de idade mínima.'
    });

    this.meta.updateTag({
      property: 'og:title',
      content: 'STF derruba idade mínima da aposentadoria especial'
    });

    this.meta.updateTag({
      property: 'og:description',
      content: 'Entenda quem pode ser beneficiado pela decisão do STF sobre aposentadoria especial.'
    });

    this.meta.updateTag({
      property: 'og:url',
      content: 'https://brizalimaadvogada.com.br/artigos/stf-derruba-idade-minima-aposentadoria-especial'
    });

    this.meta.updateTag({
      property: 'og:image',
      content: 'https://brizalimaadvogada.com.br/images/artigos/stf-derruba-idade-minima-aposentadoria-especial.jpeg'
    });

    this.meta.updateTag({
      name: 'twitter:title',
      content: 'STF derruba idade mínima da aposentadoria especial'
    });

    this.meta.updateTag({
      name: 'twitter:description',
      content: 'Entenda quem pode ser beneficiado pela decisão do STF sobre aposentadoria especial.'
    });

    this.meta.updateTag({
      name: 'twitter:image',
      content: 'https://brizalimaadvogada.com.br/images/artigos/stf-derruba-idade-minima-aposentadoria-especial.jpeg'
    });
  }

}