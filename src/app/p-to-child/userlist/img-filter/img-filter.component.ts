import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CoursesService } from '../../service-shared/courses.service';

@Component({
  selector: 'app-img-filter',
  templateUrl: './img-filter.component.html',
  styleUrls: ['./img-filter.component.scss']
})
export class ImgFilterComponent {

  five;
constructor(coursesService: CoursesService) {
  this.five = coursesService.courses1
}

  @Input()
  kum: number = 200;

  @Input()
  all: number = 0;

  @Input()
  inStock: number = 0;

  @Input()
  outOfStock: number = 0; 

  selectedFilterRadioButton: string = 'all';

  @Output()
  selectedFilterRadioButtonChanged: EventEmitter<string> = new EventEmitter<string>();

  onSelectedFilterRadioButtonChanged() {
    // console.log(this.selectedFilterRadioButton);
     console.log('Selected fiter radio button is changed');
    this.selectedFilterRadioButtonChanged.emit(this.selectedFilterRadioButton);
  }

  logFoo(){
    console.log('Foo')
  }
}
