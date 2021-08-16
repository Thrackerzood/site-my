import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StyleDirective } from './directives/styles.directives';
import { NavComponent } from '../nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ContactsComponent } from '../contacts/contacts.component';
import { HomeComponent } from '../home/home.component';
import { WorkComponent } from '../work/work.component';
import { AppRouterModule } from './app-routing.module';
import { FooterComponent } from 'src/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    StyleDirective,
    ContactsComponent,
    HomeComponent,
    WorkComponent,
    FooterComponent

  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
