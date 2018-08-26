import { Component } from '@angular/core';

import 'clay-button';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  count = 0;

  add() {
    this.count += 1;
  }
}
