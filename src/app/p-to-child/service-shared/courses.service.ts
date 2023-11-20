import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

  courses1 = ['Arun', 'Akash', 'Abishek']
  
 courses = [
    {
      id: 1,
      name: 'Arun',
      image: './assets/images/download.jpg',
      title: 'Adobe XD Photoshop Express',
      rating: 4.6,
      time: '2 hrs',
      pickedBy: ['Arun', 'Akash', 'Abishek'],
      assignedBy: 'Self',
      skills: 'Java, Python, CSS',
      recommendedFor: 'Arun',
      percentage: 65,
      category: 'Technical Skills',
      domain: 'By Service Line',
      is_in_inventory: true
    },
    {
      id: 2,
      name: 'Vimal',
      image: './assets/images/download.jpg',
      title: 'Photoshop',
      rating: 4.6,
      time: '2 hrs',
      pickedBy: ['Arun', 'Akash'],
      assignedBy: 'Self',
      skills: 'Java, Python, CSS',
      recommendedFor: 'Arun',
      percentage: 65,
      category: 'Technical Skills',
      domain: ' By Service Line',
      is_in_inventory: true
    },
    {
      id: 3,
      name: 'Prem',
      image: './assets/images/download.jpg',
      title: 'Photoshop',
      rating: 4.6,
      time: '2 hrs',
      pickedBy: ['Arun', 'Akash'],
      assignedBy: 'Self',
      skills: 'Java, Python, CSS',
      recommendedFor: 'Arun',
      percentage: 65,
      category: 'Technical Skills',
      domain: ' By Service Line',
      is_in_inventory: true
    },
    {
      id: 4,
      name: 'Kumar',
      image: './assets/images/download.jpg',
      title: 'Figma',
      rating: 5,
      time: '1.5 hrs',
      pickedBy: ['Arun', 'Prem'],
      assignedBy: 'Self',
      skills: 'Java, Python, CSS',
      recommendedFor: 'Arun',
      percentage: 65,
      category: 'Technical Skills',
      domain: ' By Service Line',
      is_in_inventory: false
    }
  ];

  totalProductCount = this.courses.length;
  inStockProductCount = this.courses.filter(p => p.is_in_inventory === true).length;
  outOfStockProductCount = this.courses.filter(p => p.is_in_inventory === false).length;

  selectedFilterRadioButton: string = 'all';

}
