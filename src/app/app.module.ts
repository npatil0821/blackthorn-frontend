import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { ItemComponent } from './components/item/item.component';
import { QtyComponent } from './components/qty/qty.component';
import { LineComponent } from './components/line/line.component';
import { DonateComponent } from './components/donate/donate.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ItemComponent,
    QtyComponent,
    LineComponent,
    DonateComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
