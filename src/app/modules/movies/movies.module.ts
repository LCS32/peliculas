import { NgModule } from '@angular/core';
import { MoviesComponent } from './movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { TagModule } from 'primeng/tag';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@NgModule({
  declarations: [
    MoviesComponent,
    MovieDetailComponent,
  ],
  imports: [
    MoviesRoutingModule,
    CardModule,
    ButtonModule,
    CommonModule,
    TagModule,
    ProgressSpinnerModule
  ],
})
export class MoviesModule { }
