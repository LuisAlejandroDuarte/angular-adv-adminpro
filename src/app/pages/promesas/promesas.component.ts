import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css']
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {


    // const promesa = new Promise((result,reject)=> {


    //   if (false) {
    //     result("Hola mundo");
    //   } else {
    //     reject("Algo salió mal");
    //   }
    //   console.log("Promesa");
    //   result("Hola");
    // });


    // promesa.then(x=>{
    //   console.log(x);
    // }).catch(reject=>{
    //     console.log("Algo esta mal");
    // });

    // console.log("Fin Init");
    this.getUsuarios().then(usuario=>{
      console.log(usuario);
    });

    //this.getUsuarios();

  //   const promesa = new Promise((resolve,reject)=> {

  //     if (false) {
  //       resolve("Hola mundo");
  //     } else {
  //       reject("Algo salió mal");
  //     }


  //   });

  //   promesa.then((mensaje)=>{
  //     console.log(mensaje);
  //   })
  //   .catch(error=>console.log("Error en mi promesa algo salió mal",error));

  //   console.log("Fin del Init");
  //
   }



   getUsuarios() {
   return new Promise(resolve=> {
      fetch('https://reqres.in/api/users?page=2')
      .then(resp=>  resp.json())
      .then(body=> resolve(body.data));
     });


   }
}
