import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-search-food',
  templateUrl: './search-food.component.html'
})
export class SearchFoodComponent implements OnInit{
  
  ngOnInit(): void {
    this.debounce
    .pipe(debounceTime(400))
    .subscribe(valor => {
      this.onDebounce.emit(valor);
    })
  }

  debounce: Subject<string> = new Subject();

  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @ViewChild('searchRecipe') termino!: ElementRef;

  tecladoPresionar(): void{
    this.debounce.next(this.termino.nativeElement.value);
  }
}
