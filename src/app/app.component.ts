import { Component } from '@angular/core';
import { BackendService} from '../app/backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private backendService: BackendService) {}
  title = this.backendService.hello();
}
