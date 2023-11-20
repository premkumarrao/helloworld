import { Component } from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})

export class AuthorsComponent {
  title = 'appComponent';  
  isShowDivIf = false;

  toggleDisplayDivIf() {  
    this.isShowDivIf = !this.isShowDivIf;  
  }  
  title_1 = "Angular";
  title_2 = "List of courses";
  imageUrl = "https://picsum.photos/id/237/200/300";
  courses;
  colSpan = 2;
  isActive = true;
  email = "me@example.com";

//   toggleChild() {
//      this.showVar = !this.showVar;
//  }
  onKeyUp() {
    console.log(this.email);
  }

  divClicked(): void {
    console.log("div clicked");
  }
  onSave($event:any): void {
    $event.stopPropagation();
    console.log("Event was clicked", $event);
  } 
  
  constructor(service: AuthorsService) {
    this.courses = service.getauthors();
  }
  getTitles1() {
    return this.title_1;
  }

}
