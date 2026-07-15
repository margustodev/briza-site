import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { ArtigoStfAposentadoriaEspecial } from './pages/artigo-stf-aposentadoria-especial/artigo-stf-aposentadoria-especial';
import { ArtigoRedutorProfessor } from './pages/artigo-redutor-professor/artigo-redutor-professor';

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
    path: 'artigo',
    redirectTo: 'artigos/stf-derruba-idade-minima-aposentadoria-especial'
  },
  {
    path: '**',
    redirectTo: ''
  }
];