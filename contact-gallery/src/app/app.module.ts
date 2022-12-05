import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContactContainerComponent } from './contact-container/contact-container.component';
import { SlidebarComponent } from './slidebar/slidebar.component';
import { IconComponent } from './icon/icon.component';
import { SearchComponent } from './search/search.component';
import { ContactCardComponent } from './contact-card/contact-card.component';
import { SidebarItemComponent } from './sidebar-item/sidebar-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactContainerComponent,
    SlidebarComponent,
    IconComponent,
    SearchComponent,
    ContactCardComponent,
    SidebarItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
