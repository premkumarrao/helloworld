import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  postList: Array<any> = [
    {
      id: 1, postTitle: "Post 1",
    },
    {
      id: 2, postTitle: "Post 2",
    },
    {
      id: 3, postTitle: "Post 3",
    },
    {
      id: 4, postTitle: "Post 4",
    }
  ]

  addPost(data:any) {
    this.postList.push(data);
  }

  events = [
    {
      id: 1,
      name: 'Aarthi',
      image: './assets/images/download.jpg',
      title: 'Adobe XD Photoshop Express',
    },
    {
      id: 2,
      name: 'Anandh',
      image: './assets/images/download.jpg',
      title: 'Figma software',
    },
    {
      id: 3,
      name: 'Kumar',
      image: './assets/images/download.jpg',
      title: 'Illustrator software',
    }
  ]

  getEvents(){
    return this.events
  }


  constructor() {

   }
}
