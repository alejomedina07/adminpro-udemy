import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

// import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription

  constructor() {

    this.subscription = this.regresaObs()
    .subscribe(
      num => console.log('subs', num),
      error => console.error('error en ', error),
      ()=> console.log('termino')
    );


  }

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log('la pagina se cierrra');
    this.subscription.unsubscribe();
  }


  regresaObs():Observable<any> {
    return new Observable( (observer: Subscriber<any> ) => {

      let contador = 0;

      let intervalo = setInterval( () => {

        contador += 1;

        // const salida = { salida: contador  };
        observer.next( { salida: contador  } );


        // if ( contador === 3 ) {
        //     clearInterval( intervalo );
        //     observer.complete();
        // }

        // if ( contador === 2 ) {
        //     // clearInterval( intervalo );
        //     observer.error('auxil');
        // }

      }, 1000);

    }).pipe(
      map( resp => resp.salida ),
      filter( (valor) => { return valor % 2 === 1; })
    )

  }

}
