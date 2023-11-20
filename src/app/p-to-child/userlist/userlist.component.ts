import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CoursesService } from '../service-shared/courses.service';


@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent {

  @Input()
  searchTxt: string = '';

  selectedFilterRadioButton: string = 'all';

  @Output()
  selectedFilterRadioButtonChanged: EventEmitter<string> = new EventEmitter<string>();

  onSelectedFilterRadioButtonChanged() {
    // console.log(this.selectedFilterRadioButton);
     console.log('Selected fiter radio button is changed');
    this.selectedFilterRadioButtonChanged.emit(this.selectedFilterRadioButton);
  }

  prod;
  prodCount;
  inStockCount;
  outOfStockCount;
  prem1;
  constructor(courseService: CoursesService) {
    this.prodCount = courseService.totalProductCount;
    this.inStockCount = courseService.inStockProductCount;
    this.outOfStockCount = courseService.outOfStockProductCount;
    this.prem1 = courseService.courses;
  }
  
  // searchTxt2:string = '';
  // onFilterChanged(value: string){
  //   this.searchTxt2 = value;
  // }

}
