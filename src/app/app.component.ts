import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private db: AngularFireDatabase) {
    const observable = this.db.object(`connected`);

    observable.subscribe(
      next => console.log('connected', next),
      error => console.log('error', error),
      () => console.log('complete')
    );
  }
}
