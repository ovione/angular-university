import { Component, OnInit } from '@angular/core';
import { concat, merge, Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  option = 'rxJs';

  ngOnInit() {
    const of1$ = of(1, 2, 3, 4, 5);
    const of2$ = of('one', 'two', 'three', 'four', 'five');

    //this.concat(of1$, of2$);
    this.merge(of1$, of2$);
  }

  private concat(of1$: Observable<any>, of2$: Observable<any>) {
    concat(of1$, of2$).subscribe(console.log);
  }

  private merge(of1$: Observable<any>, of2$: Observable<any>) {
    merge(of1$, of2$).subscribe(console.log);
  }
}
