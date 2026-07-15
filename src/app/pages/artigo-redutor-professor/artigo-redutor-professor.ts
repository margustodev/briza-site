import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { WhatsappButton } from '../../components/whatsapp-button/whatsapp-button';

@Component({
  selector: 'app-artigo-redutor-professor',
  standalone: true,
  imports: [
    RouterLink,
    Header,
    Footer,
    WhatsappButton
  ],
  templateUrl: './artigo-redutor-professor.html',
  styleUrl: './artigo-redutor-professor.scss'
})
export class ArtigoRedutorProfessor implements OnInit {

  constructor(
    private title: Title,
    private meta: Meta
  ) {}

  ngOnInit() {
    this.title.setTitle(
      'STF confirma redutor de 5 anos na aposentadoria de professor | Briza Lima Advocacia'
    );

    this.meta.updateTag({
      name: 'description',
      content: 'Entenda a decisão do STF que confirmou o redutor constitucional de 5 anos no cálculo da aposentadoria por invalidez de professores da rede pública.'
    });

    this.meta.updateTag({
      property: 'og:title',
      content: 'STF confirma redutor de 5 anos na aposentadoria de professor'
    });

    this.meta.updateTag({
      property: 'og:description',
      content: 'Veja quem pode ser beneficiado pela decisão do STF e quando pode existir direito à revisão da aposentadoria.'
    });

    this.meta.updateTag({
      property: 'og:url',
      content: 'https://brizalimaadvogada.com.br/artigos/stf-confirma-redutor-5-anos-aposentadoria-professor'
    });

    this.meta.updateTag({
      name: 'twitter:title',
      content: 'STF confirma redutor de 5 anos na aposentadoria de professor'
    });

    this.meta.updateTag({
      name: 'twitter:description',
      content: 'Veja quem pode ser beneficiado pela decisão do STF e quando pode existir direito à revisão da aposentadoria.'
    });
  }

}