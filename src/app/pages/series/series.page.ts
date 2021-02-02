import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemoviedbService } from 'src/app/services/themoviedb/themoviedb.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.page.html',
  styleUrls: ['./series.page.scss'],
})
export class SeriesPage implements OnInit {

  public series: Observable<any>;

  constructor(
    public theMovieDbService: ThemoviedbService
  ) { }

  ngOnInit() {
    this.series = this.theMovieDbService.getPopularSeries();
  }

}
