import { Component } from '@angular/core';

@Component({
  selector: 'app-c-to-p',
  templateUrl: './c-to-p.component.html',
  styleUrls: ['./c-to-p.component.scss']
})
export class CToPComponent {
  inStock:number = 0;
  one:number = 0;
  two:number = 2;

  name: any = 'John Doe';
  product =
    {
      img: '/assets/images/user.png',
      name: 'iPhone',
      price: 789,
      color: 'black',
      discount: 8.5,
      inStocks: 10
    }

    decrementValue(){
      if(this.one > 0){
        this.one --;
      }
  
    }
    incrementValue(){
      if(this.one <= this.product.inStocks-1){
        this.one ++;
      }
    }
  
getDiscountedPrice() {
  return this.product.price - (this.product.price * this.product.discount/100);
}
  calculate(){
    return this.one * this.two;
  }
 public message:any;
  receiveMessage($event:any){
    console.log($event)
   this.message = $event;
  }
  onKeyup($event:any){
    console.log($event)
  }

  courses:any = [
  { id: 1, name: 'course1' },
  { id: 2, name: 'course2' },
  { id: 3, name: 'course3' },
  { id: 4, name: 'course4' }
  ]

  addNew(){
    this.courses.push({id: 5, name:'course5'});
  }

  delCourses(i:any) {
    this.courses.splice(i, 1);
  }

  stepForm:any;

  onClick(status:any){
    this.stepForm = status;
  }

  public isActive:boolean = false;

}
