import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/app.reducers';
import { Store } from '@ngrx/store';
import { MultiplicarAction, DividirAction } from '../contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: []
})
export class HijoComponent implements OnInit {

  contador: number;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('contador')
      .subscribe( contador => {
        this.contador = contador;
        console.log(contador);
      });
  }

  multiplicar() {
    const accion = new MultiplicarAction(5);
    this.store.dispatch( accion );
    // this.contador *= 2;
    // this.cambioContador.emit(this.contador);
  }

  dividir() {
    const accion = new DividirAction(10);
    this.store.dispatch( accion );
    // this.contador /= 2;
    // this.cambioContador.emit(this.contador);
  }

  resetNieto( nuevoContador ) {
    // this.contador = nuevoContador;
    // this.cambioContador.emit(this.contador);
  }

}
