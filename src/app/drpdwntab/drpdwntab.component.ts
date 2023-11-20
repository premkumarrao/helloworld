import { Component } from '@angular/core';

@Component({
  selector: 'app-drpdwntab',
  templateUrl: './drpdwntab.component.html',
  styleUrls: ['./drpdwntab.component.scss']
})
export class DrpdwntabComponent {

  heading = 'Filtering the table using Dropdown Value using "ngmodel" and "ngmodel change" ';


public someData = [{ name: 'Prem', value: "Domain", id:"123"},
        { name: 'Gopi', value: "Funtional", id:"12"},
        { name: 'Prasanna', value: "Technical", id:"23"},
        { name: 'Abishek', value: "Behavioural", id:"1233"},
        { name: 'Rajesh', value: "Domain", id:"13"},
        { name: 'Anusha', value: "Funtional", id:"1"},
        { name: 'Akila', value: "Technical", id:"34"},
        { name: 'Akila', value: "Domain", id:"56"},
        { name: 'Kumar', value: "Funtional", id:"13"},
        { name: 'Joe', value: "Domain", id:"123"},
        { name: 'Doe', value: "Behavioural", id:"113"}]

public options =['Default','Domain', 'Funtional', 'Technical']

public selected = 'Default';
selectedData:any;

constructor(){
  this.selectedData = this.someData;
}

onSelect(val:any) {
  if(this.selected == 'Default') {
   this.selectedData = this.someData.filter(x => x.value != val)
  }
  else {
    this.selectedData = this.someData.filter(x => x.value == val)
  }
}

// selected:any;
// selectedData;

// constructor(){
//   this.selectedData = this.someData;
// }

// onSelect(val:any){
//   console.log(val);
//   this.selectedData = this.someData.filter(x => x.value == val)
// }


}
