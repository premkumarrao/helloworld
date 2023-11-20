import { Component, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss'],
  providers: [DataService]

})
export class HelloComponent {
  title:any = 'Hello component using incremental dataService as constructor method';
  @Input() name:any = 'prem';
  constructor(public dataService: DataService) {
  }
  incrementCount() {
    this.dataService.count++;
  }
}
