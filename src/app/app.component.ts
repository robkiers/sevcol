import { Component } from '@angular/core';
import { TopBarService } from './core/top-bar/top-bar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'CSAI - Celestra Software Assistant Interface';

  constructor(
    public _topbar: TopBarService
  ) {
  }
}

