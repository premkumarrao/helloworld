import { Component } from '@angular/core';

@Component({
  selector: 'app-checkboxvalue',
  templateUrl: './checkboxvalue.component.html',
  styleUrls: ['./checkboxvalue.component.scss']
})
export class CheckboxvalueComponent {

  heading = 'Getting value after selcting the checkbox" ';

  name = 'Angular';
all  = [
    {
      id:1,
      name:'d1',
      checked: false
    },
    {
      id:2,
      name:'d2',
      checked: false
    },
    {
      id:3,
      name:'d3',
      checked: false
    },
    {
      id:4,
      name:'d4',
      checked: false
    },
    {
      id:5,
      name:'d5',
      checked: false
    },
  ];
  selected = [
    {
      id:1,
      name:'d1'
    },
    {
      id:3,
      name:'d3'
    },
  ];

  getSel() {
    for(let i=0;i<this.selected.length; i++){
      for(let j=0;j<this.all.length;j++){
        if(this.all[j].id === this.selected[i].id) {
          this.all[j].checked = true;
        }
      }
    }
  }

   add() {
     var t = this.all
      .filter(opt => opt.checked)
      .map(opt => opt);
    this.selected = t;
   }
}
