import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { PostService } from '../Services/post.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
  providers: [DataService]
})
export class ContactFormComponent implements OnInit {

  posts: Array<any>;
  posts1: any[];
  constructor(public dataService: DataService, private postService: PostService) {
    this.posts = postService.postList;
    this.posts1 = this.postService.getEvents(); 
   
  }
  ngOnInit() {
    throw new Error('Method not implemented.');
    this.posts1 = this.postService.getEvents();
  }


  handleThumbnailClick(eventName){
    // toastr.success(eventName)
  }

  newData(){
    let newPost = 
    {
      id: 5, postTitle: "Post 5"
    }
    
    this.postService.addPost(newPost);
  }

  number:number = 1234567890;
  int:number = 3.128445;
  today: number = Date.now();

  courses: Array<any> = [];

  title:any = 'Contact Form';
  dummyText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum doloremque officiis vero! Adipisci saepe et providenteius dolorem consectetur harum reiciendis voluptatum deserunt minima itaque sequi, ratione, culpa repudiandae nemo?'
  postTitle:any;
  postEmail:any;
  imgLink:any;
  websiteUrl:any;
  postAddress:any;
  addBackgroud:boolean = false;
  log(x:any) { 
    console.log(x);
  }

  // onKeyupimgLink(){
  //  return this.imgLink;
  // }

  // onKeyupwebsiteUrl(){
  //   return this.websiteUrl.value;
  //  }

  onSubmit(myForm: NgForm){
    console.log(myForm);
  }
 

  decrementCount() {
    this.dataService.count--;
  }
  
  formSave(){
    this.courses.push({
      "postTitle": this.postTitle,
      "postEmail": this.postEmail,
      "postAddress": this.postAddress
    });
    console.log(this.courses);
  }

  delCourses(i:any){
    this.courses.splice(i, 1);
  }

}
