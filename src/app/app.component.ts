import { Component } from '@angular/core';
import { tarea } from './models/tarea';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tareapp';
  listTareas: tarea[] = [];
  nameTarea = '';
  count = 0


  addTarea(){
    console.log(this.nameTarea)

    if(this.nameTarea != ""){
      this.count = 1
      // CREAR UN OBJETO TAREA
      const tarea:tarea = {
        name:this.nameTarea
      }
      //AGREGAR EL OBJETO AL ARRAY
      this.listTareas.push(tarea)
  
      //RESETEAR EL FORMULARIO
      this.nameTarea = ''  
    }

  
  }

  delete(index: number):void{
    if(index == 0){
      this.count = 0
    }   
    console.log(index)
    this.listTareas.splice(index, 1)
    
  }



}
