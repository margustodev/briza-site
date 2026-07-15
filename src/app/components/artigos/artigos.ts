import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-artigos',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './artigos.html',
  styleUrl: './artigos.scss'
})
export class Artigos {}