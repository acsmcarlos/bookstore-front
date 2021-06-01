import { LivroReadComponent } from './component/views/livro/livro-read/livro-read.component';
import { LivroDeleteComponent } from './component/views/livro/livro-delete/livro-delete.component';
import { LivroUpdateComponent } from './component/views/livro/livro-update/livro-update.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/views/home/home.component';
import { CategoriaReadComponent } from './component/views/categoria/categoria-read/categoria-read.component';
import { CategoriaCreateComponent } from './component/views/categoria/categoria-create/categoria-create.component';
import { CategoriaDeleteComponent } from './component/views/categoria/categoria-delete/categoria-delete.component';
import { CategoriaUpdateComponent } from './component/views/categoria/categoria-update/categoria-update.component';
import { LivroReadAllComponent } from './component/views/livro/livro-read-all/livro-read-all.component';
import { LivroCreateComponent } from './component/views/livro/livro-create/livro-create.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'categorias', component: CategoriaReadComponent },
    { path: 'categorias/create', component: CategoriaCreateComponent },
    { path: 'categorias/delete/:id', component: CategoriaDeleteComponent },
    { path: 'categorias/update/:id', component: CategoriaUpdateComponent },
    { path: 'categorias/:id_cat/livros', component: LivroReadAllComponent },
    { path: 'categorias/:id_cat/livros/create', component: LivroCreateComponent },
    { path: 'categorias/:id_cat/livros/:id/update', component: LivroUpdateComponent },
    { path: 'categorias/:id_cat/livros/:id/delete', component: LivroDeleteComponent },
    { path: 'categorias/:id_cat/livros/:id/read', component: LivroReadComponent },
    
    // { path: '**', redirectTo: '/categorias' },
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}