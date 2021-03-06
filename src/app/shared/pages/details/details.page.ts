import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { IonSlides } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ThemoviedbService } from 'src/app/services/themoviedb/themoviedb.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  public base$: Observable<any>;
  public detailsMedia$: Observable<any>;
  //public images$: Observable<any>;
  //@ViewChild('slider', { static: false }) slider: IonSlides;

  constructor(
    private route: ActivatedRoute,
    private theMovieDbService: ThemoviedbService
  ) { }

  ngOnInit() {
    this.base$ = this.route.data;
    this.base$.subscribe((data) => {
      this.detailsMedia$ = this.theMovieDbService.getDetails(data.base, this.route.snapshot.params.id)
    });
  }

  /*tapToNext = (slider: any) => {
    slider.slideNext(500);
  }

  public getTypeOf = (property: any): string => {
    return typeof property;
  }*/

}
