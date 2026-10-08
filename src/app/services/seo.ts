import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class Seo {

  private readonly document = inject(DOCUMENT);
  private readonly meta = inject(Meta);

  private readonly baseUrl = 'https://brizalimaadvogada.com.br';

  setCanonical(path: string): void {

    // Remove parâmetros e fragmentos da URL
    const cleanPath = path.split(/[?#]/)[0];

    // Padroniza o caminho
    const normalizedPath = cleanPath === '/'
      ? '/'
      : '/' + cleanPath.replace(/^\/+|\/+$/g, '');

    // Monta a URL canônica
    const canonicalUrl = `${this.baseUrl}${normalizedPath}`;

    // Procura a tag canonical existente
    let link = this.document.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]'
    );

    // Cria a tag caso ela não exista
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }

    // Atualiza o canonical
    link.setAttribute('href', canonicalUrl);

    // Atualiza também a URL do Open Graph
    this.meta.updateTag({
      property: 'og:url',
      content: canonicalUrl
    });

  }

}