import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { ArtigoStfAposentadoriaEspecial } from './pages/artigo-stf-aposentadoria-especial/artigo-stf-aposentadoria-especial';
import { ArtigoRedutorProfessor } from './pages/artigo-redutor-professor/artigo-redutor-professor';
import { ArtigoTema1071Stf } from './pages/artigo-tema-1071-stf/artigo-tema-1071-stf';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'artigos/stf-derruba-idade-minima-aposentadoria-especial',
    component: ArtigoStfAposentadoriaEspecial
  },
  {
    path: 'artigos/stf-confirma-redutor-5-anos-aposentadoria-professor',
    component: ArtigoRedutorProfessor
  },
  {
    path: 'artigos/tema-1071-stf-mudanca-orgao-publico-aposentadoria',
    component: ArtigoTema1071Stf
  },
  {
    path: 'artigo',
    redirectTo: 'artigos/stf-derruba-idade-minima-aposentadoria-especial'
  },
  {
    path: '**',
    redirectTo: ''
  }
];