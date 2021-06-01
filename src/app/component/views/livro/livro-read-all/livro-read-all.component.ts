import { LoaderService } from './../../../../loader/loader.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LivroService } from './../livro.service';
import { Livro } from './../livro.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-livro-read-all',
  templateUrl: './livro-read-all.component.html',
  styleUrls: ['./livro-read-all.component.css']
})
export class LivroReadAllComponent implements OnInit {

  displayedColumns: string[] = ['id', 'titulo', 'livros', 'acoes'];

  id_cat: String = ''

  livros: Livro[] = []

  constructor(
    private service: LivroService,
    private route: ActivatedRoute,
    private router: Router,
    public loaderService: LoaderService,
  ) { }

  ngOnInit(): void {
    this.id_cat = this.route.snapshot.paramMap.get('id_cat')!;
    this.findAll();
  }

    findAll(): void {
      this.service.findAllByCategoria(this.id_cat).subscribe((resposta) => {
        this.livros = resposta;
        console.log(this.livros)
      })
    }

    navegarParaCriarLivro(): void { 
      this.router.navigate([`categorias/${this.id_cat}/livros/create`])
    }

}
