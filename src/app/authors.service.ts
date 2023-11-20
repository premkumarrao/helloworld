import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  getauthors(){
    return ["Author 1", "Author 2", "Author 3"];
    } 
  constructor() { }
}
