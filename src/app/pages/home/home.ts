import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Hero } from '../../components/hero/hero';
import { Diferenciais } from '../../components/diferenciais/diferenciais';
import { Sobre } from '../../components/sobre/sobre';
import { Areas } from '../../components/areas/areas';
import { Artigos } from '../../components/artigos/artigos';
import { Faq } from '../../components/faq/faq';
import { CtaFinal } from '../../components/cta-final/cta-final';
import { Mapa } from '../../components/mapa/mapa';
import { Footer } from '../../components/footer/footer';
import { WhatsappButton } from '../../components/whatsapp-button/whatsapp-button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    Header,
    Hero,
    Diferenciais,
    Sobre,
    Areas,
    Artigos,
    Faq,
    CtaFinal,
    Mapa,
    Footer,
    WhatsappButton
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {}