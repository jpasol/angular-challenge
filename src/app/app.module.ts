import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { SpeechesComponent } from './speeches/speeches.component';
import { SpeechItemComponent } from './speech-item/speech-item.component';
import { FormsModule } from '@angular/forms';
import { ModalMessageComponent } from './modal-message/modal-message.component';
import { SpeechesService } from './speeches.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SidebarComponent,
    ContentComponent,
    SpeechesComponent,
    SpeechItemComponent,
    ModalMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [SpeechesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
