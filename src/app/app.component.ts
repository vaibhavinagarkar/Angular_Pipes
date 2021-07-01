import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lucifer';

  name = 'Morning Star'

  msg = "I am Devil"
  fullName = "Lucifer Morning Star"
  birthday = new Date(2000, 1, 12)
  count:number=4.1237589



}
