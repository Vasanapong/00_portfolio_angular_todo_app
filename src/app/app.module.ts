import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { ViewNoteComponent } from './view-note/view-note.component';
import { EditNoteComponent } from './edit-note/edit-note.component';

@NgModule({
  declarations: [
    AppComponent,
    AddNoteComponent,
    ViewNoteComponent,
    EditNoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
