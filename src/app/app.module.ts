import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ColorItemComponent } from './components/color-item/color-item.component';
import { ColorPalleteComponent } from './components/color-pallete/color-pallete.component';
import { DropTargetDirective } from './directives/drop-target.directive';
import { DraggableDirective } from './directives/draggable.directive';
import { DragService } from './services/drag.service';

// Redux imports.
import { reducers, metaReducers } from './state-management/reducers';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    ColorItemComponent,
    ColorPalleteComponent,
    DraggableDirective,
    DropTargetDirective
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    })
  ],
  providers: [ DragService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
