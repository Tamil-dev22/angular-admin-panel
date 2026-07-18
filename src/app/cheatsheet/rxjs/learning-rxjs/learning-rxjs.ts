import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-learning-rxjs',
  imports: [AsyncPipe,CommonModule],
  templateUrl: './learning-rxjs.html',
  styleUrl: './learning-rxjs.scss',
})
export class LearningRxjs implements OnInit,OnDestroy {

  mark$ = new Observable<number[]>((observer) => {

    observer.next([80,90,100])
    observer.complete();
  })
  // Subscription
  private subscription!: Subscription;

  ngOnInit(): void {
    //observer
    // this.mark$.subscribe((data) => { console.log(data) }) 
    //observable
    this.mark$.subscribe({
     next:(data)=>console.log(data),
     error:(err)=> console.log(err),
     complete:()=>console.log("completed")
    })
       // Observable that emits every second
    // const marks$ = interval(1000);

    // Subscription
    // this.subscription = marks$.subscribe({
    //   next: (value) => console.log('Interval:', value)
    // });


  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    console.log("Subscriptiion closed")
  }
}
