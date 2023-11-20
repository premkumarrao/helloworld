import { Component, Output, EventEmitter } from '@angular/core';
import { PostService } from 'src/app/Services/post.service';

@Component({
  selector: 'app-childcomp1',
  templateUrl: './childcomp1.component.html',
  styleUrls: ['./childcomp1.component.scss']
})
export class Childcomp1Component {
  outputChildMessage:string = 'Message from child component via output decorator';
  @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    console.log('clicked');
    this.messageEvent.emit(this.outputChildMessage);
  }

  constructor() {
  }

}
