import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';

    minDate = new Date(2017, 5, 10);
    maxDate = new Date(2018, 9, 15);

    bsValue: Date;
    bsRangeValue: any = [new Date(2017, 7, 4), new Date(2017, 7, 20)];

}
