import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesModeL } from 'src/app/model/movies.model';
import { ApiService } from 'src/app/services/api.service';
import { BaseComponent } from 'src/app/shared/base/base.component';
import { ConstantUri } from 'src/app/utils/constantUri';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent extends BaseComponent<MoviesModeL.MoviesResponse> implements OnInit {

  movies: MoviesModeL.MoviesResponse = {
    page: 1,
    results: [],
    total_pages: 0,
    total_results: 0
  };

  imgBaseUrl = ConstantUri.pathImg;
  override set setResponseService(val: MoviesModeL.MoviesResponse)  {
    console.log(val)
    this.movies = val;
  }

  constructor(
    private readonly router: Router,
    protected override apiService: ApiService<MoviesModeL.MoviesResponse>
  ) { 
    super(apiService);
  }

  override ngOnInit(): void {
    this.paramsConfig.url = ConstantUri.popularMovies;
    this.paramsConfig.params.api_key = ConstantUri.apiKey;
    this.getRequest();
  }

  seeDetail(id: number) {
    this.router.navigate([`populares/detalle/${id}`])
  }

}
