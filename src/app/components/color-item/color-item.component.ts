import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '@app/state-management/reducers';
import * as colorItemsAction from '@app/state-management/actions/colorItems';

@Component({
  selector: 'app-color-item',
  templateUrl: './color-item.component.html',
  styleUrls: ['./color-item.component.scss']
})
export class ColorItemComponent implements OnInit {
  bgColor: string;

  constructor(private _store: Store<fromRoot.State>) {}

  @Input() item;

  ngOnInit() {
    console.log(this.item);
  }

  onDrop(data: any) {
    if (this.bgColor === undefined) {
      this.bgColor = data;
      this._store.dispatch(new colorItemsAction.UpdateItem({
        id: this.item.id,
        color: data
      }));
    } else {
      const newColor = data;
      const oldColor = this.bgColor;
      this.bgColor = this.colorMixer(newColor, oldColor);
      this._store.dispatch(new colorItemsAction.UpdateItem({
        id: this.item.id,
        color: this.bgColor
      }));
    }
  }

  private rgbToArray (rgb) {
    return rgb.replace(/[^\d,.]/g, '', '').split(',');
  }

  private colorMixer (colorA, colorB) {
    colorA = this.rgbToArray(colorA);
    colorB = this.rgbToArray(colorB);
    const colorMixR = (Number(colorA[0]) + Number(colorB[0])) / 2;
    const colorMixG = (Number(colorA[1]) + Number(colorB[1])) / 2;
    const colorMixB = (Number(colorA[2]) + Number(colorB[2])) / 2;
    return `rgb(${colorMixR}, ${colorMixG}, ${colorMixB})`;
  }
}
