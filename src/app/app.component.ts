import { Component } from '@angular/core'
import { Conversor } from './model/conversor'

@Component({
  selector: 'my-app',
  templateUrl: 'views/conversor.html'
})
export class AppComponent  { 
  conversor = new Conversor()
}
