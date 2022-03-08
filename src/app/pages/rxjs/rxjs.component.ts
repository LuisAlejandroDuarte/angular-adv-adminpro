import { Component, OnDestroy } from '@angular/core';
import { Observable,interval, Subscription } from 'rxjs';
import { retry,take,map,filter } from 'rxjs/operators'

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnDestroy  {

  public intervalSubs:Subscription;


  ngOnInit(): void {
  //   let i=-1;
  //   const observa = new Observable<number>(res=> {


  //      const intervalo= setInterval(datos =>{
  //           i++;
  //           res.next(i);
  //           if (i==4) {
  //             clearInterval(intervalo);
  //             res.complete();
  //           }

  //           if (i==2) {
  //             i=0;
  //             res.error("i llego al valor 2");
  //           }
  //       },1000)

  //   });

  // observa.pipe(
  //   retry(1)
  // ).subscribe(valor=>{
  //   console.log("Subs", valor),
  //   error=> console.warn("Error",error),
  //   ()=> console.info("Obser terminado")
  // });

  }

  constructor() {


    // this.retornaObservable().pipe(
    //   retry(1)
    // ).subscribe(
    //     valor=>console.log("Sub",valor),
    //     error=>console.warn("Error",error),
    //     ()=>console.info("Obs terminado")
    // );

   this.intervalSubs= this.retornaIntervalo().subscribe(console.log);



  }
  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }


retornaIntervalo():Observable<number> {
  return interval(100)
              .pipe(
                map(valor=>{
                   return valor+1
               }),
               filter( valor=>( valor % 2 ===0 )? true:false ),
              );
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
