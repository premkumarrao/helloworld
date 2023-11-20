import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CToPComponent } from './c-to-p/c-to-p.component';
import { Childcomp1Component } from './c-to-p/childcomp1/childcomp1.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FormsModule } from '@angular/forms';
import { TitleCasePipe } from './title-case.pipe';
import { HidingHtmlElementComponent } from './hiding-html-element/hiding-html-element.component';
import { PToChildComponent } from './p-to-child/p-to-child.component';
import { AuthorsComponent } from './authors/authors.component';
import { ParentComponent } from './parent/parent.component';
import { UserlistComponent } from './p-to-child/userlist/userlist.component';
import { ImgFilterComponent } from './p-to-child/userlist/img-filter/img-filter.component';
import { SearchComponent } from './p-to-child/search/search.component';
import { UsersComponent } from './p-to-child/userlist/users/users.component';
import { NavbarComponent } from './navbar/navbar.component';
import { appRoutes } from 'src/routes';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    CToPComponent,
    Childcomp1Component,
    ContactFormComponent,
    TitleCasePipe,
    HidingHtmlElementComponent,
    PToChildComponent,
    AuthorsComponent,
    ParentComponent,
    UserlistComponent,
    ImgFilterComponent,
    SearchComponent,
    UsersComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
