import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ItemFormComponent } from './item-form/item-form.component';
import { ListFormComponent } from './list-form/list-form.component';

@NgModule({
  declarations: [AppComponent, ListFormComponent, ItemFormComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
