import { Component } from '@angular/core';
import { CoursesService } from './service-shared/courses.service';

@Component({
  selector: 'app-p-to-child',
  templateUrl: './p-to-child.component.html',
  styleUrls: ['./p-to-child.component.scss']
})
export class PToChildComponent {

  prem;
  constructor(courseService: CoursesService) {
    this.prem = courseService.selectedFilterRadioButton;
  }

  event = {name:'ngConf 2025', date: '3/1/2025', time: '8am', location: {address: '123 Main St', city: 'Salt Lake City, UT', country: 'USA'}}


  searchTxt: string = '';

  setSearchText(event){
    this.searchTxt = event;
  }

}
