import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchTxt: string = '';

  @Output()
  onSearchText: EventEmitter<string> = new EventEmitter<string>();

  onSearchTxtChanged(){
    this.onSearchText.emit(this.searchTxt);
  }

}
