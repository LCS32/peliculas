import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieModel } from 'src/app/model/movie.model';
import { ApiService } from 'src/app/services/api.service';
import { BaseComponent } from 'src/app/shared/base/base.component';
import { ConstantUri } from 'src/app/utils/constantUri';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent extends BaseComponent<MovieModel.Movie> implements OnInit {

  movie!: MovieModel.Movie;
  readonly imgBaseUrl = ConstantUri.pathImg;
  override set setResponseService(val: MovieModel.Movie)  {
    console.log(val)
    this.movie = val;
  }

  constructor(
    protected override readonly apiService: ApiService<MovieModel.Movie>,
    private readonly activeRoute: ActivatedRoute,
    private readonly router: Router,
  ) {
    super(apiService);
  }

  override ngOnInit(): void {
    this.activeRoute.params.subscribe((val: any) => {
      this.getMoviesList(val.id)
    })
  }

  private getMoviesList(movieId: string) {
    this.paramsConfig.url = ConstantUri.movieDetail + '/' + movieId;
    this.paramsConfig.params.api_key = ConstantUri.apiKey;
    this.getRequest();
  }

  goBack() {
    this.router.navigate(['/populares']);

  }

}
