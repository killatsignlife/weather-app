import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';

import { CityWeather } from '../../../../shared/models/weather.model';
import { Bookmark } from '../../../../shared/models/bookmark.model';
import * as fromHomeActions from '../../state/home.actions';
import * as fromHomeSelectors from '../../state/home.selectors';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit, OnDestroy {
  cityWeather: CityWeather;
  loading$: Observable<boolean>;
  error$: Observable<boolean>;

  searchControl: FormControl;

  text: string;

  private componentDestroyed$ = new Subject();

  constructor(private store: Store) { }

  ngOnInit() {
    this.searchControl = new FormControl('', Validators.required);

    this.store
        .pipe(
            select(fromHomeSelectors.selectCurrentWeather),
            takeUntil(this.componentDestroyed$),
          )
        .subscribe(value => this.cityWeather = value);

    this.loading$ = this.store.pipe(select(fromHomeSelectors.selectCurrentWeatherLoading));
    this.error$ = this.store.pipe(select(fromHomeSelectors.selectCurrentWeatherError));
  }

  ngOnDestroy() {
    this.componentDestroyed$.next();
    this.componentDestroyed$.unsubscribe();
  }


  doSearch() {
    const query = this.searchControl.value;
    this.store.dispatch(fromHomeActions.loadCurrentWeather({ query }));
  }

  onToggleBookmark() {
    const bookmark = new Bookmark();

    bookmark.id = this.cityWeather.city.id;
    bookmark.name = this.cityWeather.city.name;
    bookmark.country = this.cityWeather.city.country;
    bookmark.coord = this.cityWeather.city.coord;
  }
}