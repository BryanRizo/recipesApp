import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'recipesApp';
  statusSidebar: boolean = false;

  showHiddenSidebar(status: boolean): void{
    this.statusSidebar = status;
  }
}
