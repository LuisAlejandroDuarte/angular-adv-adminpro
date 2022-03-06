import { Component } from '@angular/core';
import { Observable,interval } from 'rxjs';
import { retry,take,map } from 'rxjs/operators'

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent  {

  constructor() {


    // this.retornaObservable().pipe(
    //   retry(1)
    // ).subscribe(
    //     valor=>console.log("Sub",valor),
    //     error=>console.warn("Error",error),
    //     ()=>console.info("Obs terminado")
    // );

    this.retornaIntervalo().subscribe(console.log);



  }


retornaIntervalo():Observable<number> {
  return interval(1000)
              .pipe(
                take(4),
                map(valor=>{
                   return valor+1
               }));
}

  retornaObservable():Observable<number> {
    let i=-1;
    return new Observable<number>(observer=> {

    const intervalo=  setInterval(()=>{
        i++;
          observer.next(i);

          if (i===4) {
            clearInterval(intervalo);
            observer.complete();
          }

          if (i===2) {

            observer.error("Leego al valor de 2");
          }

      },1000)
    } );

  }

}
