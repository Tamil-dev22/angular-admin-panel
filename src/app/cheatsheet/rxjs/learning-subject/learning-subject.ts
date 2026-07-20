import { Component } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';
import { LearningRxjsOperators } from '../learning-rxjs-operators/learning-rxjs-operators';

@Component({
  selector: 'app-learning-subject',
  imports: [LearningRxjsOperators],
  templateUrl: './learning-subject.html',
  styleUrl: './learning-subject.scss',
})
export class LearningSubject {
  scores: string[] = [];

  log(message: string) {
    this.scores.push(message);
  }

  clear() {
    this.scores = []
  }

  runSubject() {
    this.clear();
    const score$ = new Subject<number>();

    score$.next(20);
    score$.next(30);

    score$.subscribe(data => {
      console.log(data)
      this.log(`Subject:(User1: ${data})`)
    })

    score$.next(30);
    score$.next(40);
  }

  runBehaviourSubject(){

    this.clear();

    const score$ = new BehaviorSubject<number>(0);

    score$.next(10);
    score$.next(20);

    score$.subscribe((data)=>{
      this.log(`BehaviourSubject: (User2 ${data})`)
    });
    score$.next(30);
    score$.next(40);
  }

  runReplaySubject(){
    this.clear();
    const score$ =  new ReplaySubject<number>(3);
    score$.next(10);
    score$.next(20);
    score$.subscribe((data)=>{
    console.log(data);
    this.log(`ReplaySubject: (User2 ${data})`);

    });
    score$.next(30);
    score$.next(40);

  }

   runAsyncSubject(){
    this.clear();
    const score$ = new AsyncSubject<number>();
    score$.next(10);
    score$.next(20);
    score$.subscribe((data)=>{
      console.log(data);
      this.log(`AsyncSubject:(User 3 ${data} )`)
    })
    score$.next(30);
    score$.next(40);
    score$.complete();
   }



}
