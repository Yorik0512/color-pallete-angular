import { Input, HostListener, Directive, HostBinding } from '@angular/core';
import { DragService } from '@app/services/drag.service';

export interface DraggableOptions {
  zone?: string;
  color?: string;
}

@Directive({
  selector: '[appDraggable]'
})
export class DraggableDirective {
  constructor(private dragService: DragService) {

  }

  @HostBinding('draggable')
  get draggable() {
    return true;
  }

  @Input()
  set appDraggable(options: DraggableOptions) {
    if (options) {
      this.options = options;
    }
  }

  private options: DraggableOptions = {};

  @HostListener('dragstart', ['$event'])
  onDragStart(event) {
    const { zone = 'zone', color = {} } = this.options;

    this.dragService.startDrag(zone);

    event.dataTransfer.setData('Text', JSON.stringify(color));
  }
}
