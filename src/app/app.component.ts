import { Component, OnInit } from '@angular/core';
import { of, from, map, take, tap, pipe } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  title = 'hello-world';

  ngOnInit() {
    // of(2,4,6,8).subscribe((item)=> console.log(item));

    // from([20,15,16,8]).subscribe(
    //   {
    //     next: (item) => console.log(`resulting item .. ${item}`),
    //     error: (error) => console.log(`error occured .. ${error}`),
    //     complete: () => console.log(`Complete` )
    //   }
    // );

    // of(2,4,6).pipe(
    //   map(item => item * 2),
    //   tap(item => console.log(item)),
    //   take(3)
    // ).subscribe(item => console.log(item));

    // of(2,4,6).pipe(
    //   map(item => item * 2),
    //   map(item => item - 3),
    // ).subscribe(item => console.log(item));

    // of(2,4,6).pipe(
    //   take(2)
    // ).subscribe(item => console.log(item));

    // of(2,4,6).pipe(
    //   pipe(
    //     tap(item => console.log(item)),
    //     map(item => item * 2),
    //     take(2),
    //     map(item => item - 3),
    //     tap(item => console.log(item))
    //   )
    // ).subscribe();

  }

}
