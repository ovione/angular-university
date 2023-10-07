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

  const obs:Oservable =
  Observable.create(observer => {

    const value = does something;

    observer.next(value);
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

Sharing HTTP Responses with the shareReplay Operator
-----------------------------------------------------
Sharing HTTP Responses with the shareReplay Operator

ShareReplay() as an operator to pipe()
to not to trigger the Observale: i.e in a backend call

tap() to log or to update variables outside the Observable chain.

Observable Concatenation - In-Depth Explanation
-------------------------------------------------------
of()
concat()

Form Draft Pre-Save Example and the RxJs Filter Operator
-------------------------------------------------------
filter()
fromPromise()
concatMap()


         const of1$ = of(1,2,3);
         const of2$ = of(4,5,6);

The sufix Map() means that there is an innerObservable

concat()
         just accepts a list of Observables and subscribes to them one after another when the previous Observable completes.
         it will wait until all values get emitted from the first source observable after then the second observable values get emitted.

        concat(of1$, of2$)
        .subscribe(num => console.log(num))

concatMap()
         calls its callback only when the previous inner Observables completes.
         concat(of1$, of2$)
         .pipe(
            concatMap(
              httpRequest
            )
         )
         .subscribe()

         PS:
             httpRequest is the inner Observable
             no httpRequest will be called simultaneously.
             httpRequest will be called only after the last finished

Understanding the merge Observable combination Strategy
-------------------------------------------------------
merge()
mergeMap()
  same as concatMap() but instead of synchronous in parallel

The sufix Map() means that there is an innerObservable

The RxJs exhaustMap Operator - In-Depth Explanatio
-------------------------------------------------------
exhaustMap() like concatMap
  but ignores extra values as long as the inner Observables still busy

Unsubscription In Detail - Implementing a Cancellable HTTP Observable
-------------------------------------------------------
Unsubscribe in our Observable created from scratch.

Setting Up the Course Component
-------------------------------------------------------
Search ongoing and cancel current search and trigger a new one.
Search TypeAhead

Building a Search Typeahead - debounceTime and distinctUntilChanged Operators
-------------------------------------------------------
debounceTime()
distinctUntilChanged()
switchMap()

html iterates over lessons$.

const searchLessons$ =
fromEvent<any>(this.input.nativeElement, 'keyup').
pipe(
  map(event => event.target.value)
  debounceTime(400), // no new value will be accepted before 400 miliseconds. When the new value is stable for 400 ms.
  distinctUntilChanged(), // no same values accepted
  switchMap(searchTerm => loadLessons(searchTerm)),
    // if a new search term arrives before the current search is finished then the current search is cancelled and a new search is started
)
.subscribe();

const initialLessons$ = loadLessons();

lessons$ = concat(initialLessons$, searchLessons$);

or with startWith and then we don't need the concat operator

const lessons$ =
fromEvent<any>(this.input.nativeElement, 'keyup').
pipe(
  map(event => event.target.value),
  startWith(loadLessons('')), // initial searchValue
  debounceTime(400), // no new value will be accepted before 400 miliseconds
  distinctUntilChanged(), // no same values accepted
  switchMap(searchTerm => loadLessons(searchTerm)),
    // if a new search term arrives before the current search is finished then the current search is cancelled and a new search is started
)
.subscribe();
Error Handling Strategies
=============================

1.  RxJs Error Handling - The Catch and Replace Error Handling Strategy
-----------------------------------------------------------------------

catchError(err => of('some value when error occurrs')) // the consumer will still receive a result with this value only if an error occurs

2.  The Catch and Rethrow RxJs Error Handling Strategy and the finalize Operator
-------------------------------------------------------

catchError(err => throwError(err)) // rethrows the error
finalize() // called when completes or errors out

VIP: catchError an finalize should be at the start of the pipe.
Otherwise for multiple subscriptions it will be executed multiple times if an error happens.
catchError can be applied multiple times after multiple operators in case we want to have
different strategies per operation failure.

3.  The Retry RxJs Error Handling Strategy
-------------------------------------------------------
retryWhen, delayWhen

RxJs Throttling vs Debouncing - Understand the Differences
-----------------------------------------------------------
throttle similar to debounce but it can leave things out if inside the throttle time range.
The debounce will always at the end emit the last value.

Implementing a Custom RxJs Operator - the Debug Operator
-----------------------------------------------------------
Fork join
-----------------------------------------------------------

Subjects and Stores - New Section Kickoff
-----------------------------------------------------------
Store Observable pattern

What are RxJs Subjects? A Simple Explanation
-----------------------------------------------------------
For multicasting

  const obs:Oservable =
  Observable.create(observer => {

    const value = does something;

    observer.next(value);
    observer.error();
    observer.complete();
  }): Subscription

A Subject is an Observable and a observer.

const subject = new Subject();
subject
  .next
  .error
  .complete
  .pipe


subject.asObservable().subscribe(val => do something); // gets the Observable

BehaviorSubject In Detail - When to Use it and Why?
-----------------------------------------------------------


-----------------------------------------------------------
-----------------------------------------------------------
-----------------------------------------------------------




















