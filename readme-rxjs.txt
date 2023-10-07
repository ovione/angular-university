stream of values
----------------------
Stream of values are emited by:
  1.  user interactions: clicks
  2.  time: intervals, timeouts
  3.  backend requests

Typically a strem is solved by having a callback.
RxJS Solves:
  when combining streams it solves the callback hell or nested streams.

How to
-----------------------------------------------------
1.  Define a stream.
    A definition of a stream is an Observable of a type.
    An Observable is a lueprint for a stream.

    const interval$ = interval(1000);

    interval$ is an Observable of type number

2.  Subscribe to the Observable

    const subs: Subscription = interval$.subscribe(
      (num: numer) => {},
      (err: any) => console.log(err);
      () => console.log('completed'),
    );

    If the steram errors or completes the Observable does never emit further values.
    If the steram errors it will not complete.
    steram errors and complete are mutually exclusive.

3.  Cancel de Observable

    subs.unsubscribe();

How to build your own Observable from scratch
-----------------------------------------------------
Learn How Observables Work Under the Hood, Build Your Own HTTP Observable

  Observable.create(observer => {
    observer.next();
    observer.error();
    observer.complete();
  }): Subscription

VIP: noop is he no operation or empty callback

Derive an Observable from an existing Observable
-----------------------------------------------------
observable.pipe(
            map((element: any) => element transformed)
           )
          .subscribe(
            (newElement: any) => console.log(newElement)
          );

One array to 2 observables that generate each and array and pass it to the screen to be listed
-----------------------------------------------------------------------------------------------------
Building Components with RxJs - Reactive Design




