import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Noticia } from 'src/app/models/noticia';
import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private noticiaService: NoticiasService) { }

  listaNoticias = [] as Noticia[]

  ngOnInit(): void {
    this.carregarNoticias()
  }

  carregarNoticias(){
    this.noticiaService.getNoticias().subscribe((noticiasRecebidas: Noticia[])=>{
      this.listaNoticias = noticiasRecebidas;
      console.log(this.listaNoticias);
    })
  }
 
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1
      },
      530: {
        items: 2
      },
      700: {
        items: 3
      },
      960: {
        items: 4
      }
    },
    nav: true
  }
}
