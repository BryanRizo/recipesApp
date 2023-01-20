import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  
  @Output() stausSidebar: EventEmitter<boolean> = new EventEmitter();
  
  status: boolean = false;
  clickEvent(){
    this.status = !this.status;
    this.stausSidebar.emit(this.status);       
  }
}
