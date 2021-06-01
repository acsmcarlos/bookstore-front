import { InterceptorService } from './loader/interceptor.service';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';

import { NavComponent } from './component/template/nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './component/views/home/home.component';
import { HeaderComponent } from './component/template/header/header.component';
import { FooterComponent } from './component/template/footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CategoriaReadComponent } from './component/views/categoria/categoria-read/categoria-read.component';
import { CategoriaCreateComponent } from './component/views/categoria/categoria-create/categoria-create.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CategoriaDeleteComponent } from './component/views/categoria/categoria-delete/categoria-delete.component';
import { CategoriaUpdateComponent } from './component/views/categoria/categoria-update/categoria-update.component';
import { LivroReadAllComponent } from './component/views/livro/livro-read-all/livro-read-all.component';
import { LivroCreateComponent } from './component/views/livro/livro-create/livro-create.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LivroUpdateComponent } from './component/views/livro/livro-update/livro-update.component';
import { LivroDeleteComponent } from './component/views/livro/livro-delete/livro-delete.component';
import { LivroReadComponent } from './component/views/livro/livro-read/livro-read.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LivroCreateComponent,
    LivroReadAllComponent,
    CategoriaReadComponent,
    CategoriaCreateComponent,
    CategoriaDeleteComponent,
    CategoriaUpdateComponent,
    LivroUpdateComponent,
    LivroDeleteComponent,
    LivroReadComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    HttpClientModule,
    MatSnackBarModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
