import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ColorItem } from '@app/models/colorItem.model';
import { Store } from '@ngrx/store';
import * as fromRoot from '@app/state-management/reducers';
import * as colorItemsAction from '@app/state-management/actions/colorItems';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private countColorItems = 100;
  colorItems: Array<ColorItem> = [];
  colorItems$: Observable<any>;
  savedColorItems = '';

  constructor(private _store: Store<fromRoot.State>) {
    for (let id = 0; id < this.countColorItems; id++) {
      this.colorItems.push({
        id,
        color: ''
      });
    }
    this._store.dispatch(new colorItemsAction.SetAll(this.colorItems));
  }

  ngOnInit() {
    this.colorItems$ = this._store.select(fromRoot.getColorItems);
    this.colorItems$.subscribe(items => {
      this.colorItems = items;
    });
  }

  resetData () {
    localStorage.setItem('colorItems', JSON.stringify([]));
    this.savedColorItems = '';
    this.colorItems = [];
    // this.savedColorItems = '';
    // this._store.dispatch(new colorItemsAction.ResetAll());
  }

  saveData () {
    localStorage.setItem('colorItems', JSON.stringify(this.colorItems));
    this.colorItems = [{id: 0, color: '#000000'}];
    // const stringify = JSON.stringify(this.colorItems);
    // localStorage.setItem('colorItems', stringify);
    // this.savedColorItems = stringify;
    // this._store.dispatch(new colorItemsAction.SetAll(this.colorItems));
  }

  loadData () {
    this.savedColorItems = localStorage.getItem('colorItems');
    // const localStor = localStorage.getItem('colorItems');
    // if (localStor.length !== undefined) {
    //   this.savedColorItems = JSON.parse(localStor);
    //   this._store.dispatch(new colorItemsAction.SetAll(this.colorItems));
    //   this.colorItems$ = this._store.select(fromRoot.getColorItems);
    //   this.colorItems$.subscribe(items => {
    //     console.log(items);
    //     this.colorItems = items;
    //   });
    // }
  }

  trackByFn(index, item) {
    return index;
  }
}
