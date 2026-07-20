import { AsyncPipe } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { catchError, combineLatest, concat, concatMap, debounceTime, delay, distinctUntilChanged, exhaustMap, filter, finalize, first, forkJoin, from, fromEvent, interval, last, map, merge, mergeMap, of, pipe, retry, share, shareReplay, skip, switchMap, take, tap, throttleTime, throwError, timeout, timer, zip } from 'rxjs';

@Component({
  selector: 'app-learning-rxjs-operators',
  imports: [AsyncPipe],
  templateUrl: './learning-rxjs-operators.html',
  styleUrl: './learning-rxjs-operators.scss',
})
export class LearningRxjsOperators implements AfterViewInit {

  employees$ = of([{ id: 1, name: "Tamil" }, { id: 2, name: "Barani" }]);
  students$ = from([{ id: 1, name: "Tamil" }, { id: 2, name: "Barani" }]);
  // counter$ = interval(1000).pipe(take(6));
  timer$ = timer(2000, 1000).pipe(take(5)) // async pipe if use cannot subscribe
  numbers = [1, 2, 3, 4, 5, 6]
  @ViewChild('btn')
  button!: ElementRef<HTMLButtonElement>

  ngAfterViewInit(): void {
    fromEvent(this.button.nativeElement, 'click').subscribe(() => {
      console.log('Button clicked')
    })
  }


  // creation operators functions
  runMap() {
    from(this.numbers).pipe(map(value => value * 10)).subscribe((data) => console.log(data))
  }
  runSwitchMap() {
    from(this.numbers).pipe(switchMap(value => {
      console.log(`Started : ${value * 10}`);

      return of(`Completed : ${value * 10}`).pipe(
        delay(3000)
      );
    }
    )).subscribe(data => console.log(data))
  }
  runMergeMap() {
    from(this.numbers).pipe(mergeMap(value => {
      console.log(`Started : ${value * 10}`);

      return of(`Completed : ${value * 10}`).pipe(
        delay(3000)
      );
    }
    )).subscribe(data => console.log(data))

  }
  runConcatMap() {
    from(this.numbers).pipe(concatMap(value => {
      console.log(`Started : ${value * 10}`);

      return of(`Completed : ${value * 10}`).pipe(
        delay(3000)
      );
    }
    )).subscribe(data => console.log(data))

  }
  runExhaustMap() {
    from(this.numbers).pipe(
      exhaustMap(value => {
        console.log(`Started : ${value * 10}`);

        return of(`Completed : ${value * 10}`).pipe(
          delay(3000)
        );
      })
    ).subscribe(data => console.log(data))

  }

  //filtering operators

  filterExample() {
    from(this.numbers).pipe(filter(value => value % 2 === 0)).subscribe((data) => console.log(data))
  }
  takeExample() {
    from(this.numbers).pipe(take(2)).subscribe((data) => console.log(data))

  }
  skipExample() {
    from(this.numbers).pipe(skip(2)).subscribe((data) => console.log(data))

  }
  firstExample() {
    from(this.numbers).pipe(first()).subscribe((data) => console.log(data))

  }
  lastExample() {
    from(this.numbers).pipe(last()).subscribe((data) => console.log(data))

  }
  distinctExample() {
    from([1, 1, 1, 2, 3, 3, 4, 5, 5]).pipe(distinctUntilChanged()).subscribe((data) => console.log(data))

  }

  debounceExample() {
    interval(300).pipe(take(10), debounceTime(300)).subscribe((data) => console.log(data));
  }
  throttleExample() {
    interval(300).pipe(take(10), throttleTime(500)).subscribe((data) => console.log(data));

  }


  //Combination operators 

  combineLatestExample() {
    combineLatest([of('angular'), of('rxjs')]).subscribe((data) => console.log(data));
  }

  forkJoinExample() {
    forkJoin([of('angular-18'), of('angular-19'), of('angular-22')]).subscribe((data) => console.log(data));
  }

  zipExample() {
    zip(of('A', 'B', 'c'), of(1, 2, 3)).subscribe((data) => console.log(data));
  }

  mergeExample() {
    merge(of('A', 'B', 'c'), of(1, 2, 3)).subscribe((data) => console.log(data));
  }

  concatExample() {
    concat(of('A', 'B', 'c'), of(1, 2, 3)).subscribe((data) => console.log(data));

  }

  //utillity operators
  tapExample() {
    from(this.numbers).pipe(tap((value) => console.log('Tap:', value))).subscribe((value) => console.log(`Subscribe: ${value}`))
  }
  delayExample() {
    from(this.numbers).pipe(delay(3000)).subscribe((data) => console.log(data));
  }
  finalizeExample() {
    from(this.numbers).pipe(finalize(() => console.log("completed"))).subscribe((data) => console.log(data));

  }
  timeoutExample() {
    from(this.numbers).pipe(delay(3000), timeout(2000)).subscribe({
      next: (data) => console.log(data),
      error: (err) => console.log(err)
    });

  }

  // error handling operators

  catchErrorExample() {

    throwError(() => new Error('Server error'))
      .pipe(
        catchError(() => of(`Default data`))
      ).subscribe((data)=>console.log(data))

  }
  retryExample() {
    let attempt = 0;
    of(1).pipe( tap(()=>{
      attempt++;
      console.log(attempt,"Attempt");
      if(attempt < 3){
        throw new Error ('Attempt failed retry')
      }
    }),retry(2)).subscribe({
      next:(data)=>console.log(data),
      error:(err)=>console.log(err)
    })

  }
  throwErrorExample() {
    throwError(() => new Error('Server error'))
      .pipe(
        // catchError(() => of(`Default data`))
      ).subscribe({
        next:(data)=>console.log(data),
        error:(err)=>console.log(err)
      })
  }

  //multicasting operators
  shareExample() {

    const source$ =  interval(1000).pipe(take(3),share())

    source$.subscribe((data)=>console.log(`User 1: ${data}`))
    source$.subscribe((data)=>console.log(`User 2: ${data}`))
  }
  shareReplayExample() {

    const source$ =  interval(1000).pipe(take(3),shareReplay(1))

    source$.subscribe((data)=>console.log(`User 1: ${data}`))
     setTimeout(() => {

      source$.subscribe(value =>
        console.log('User 2 :', value)
      );

    }, 2500);
  }

}
