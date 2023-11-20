import { Component, Input } from '@angular/core';
import { CoursesService } from '../../service-shared/courses.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
 @Input() courses2: {
    name: string,
    image: any,
    title: string
}

getColorClass(){
  const colorway = this.courses2.title;
  return {green: colorway, bolds: colorway}
}

getColorStyle():any{
  if (this.courses2.title === 'Photoshop')
  return {'color': 'green', 'fontWeight': 'bold'}
  {}
}

  // prem1;
  // constructor(courseService: CoursesService) {
  //   this.prem1 = courseService.courses;
  // }

}
