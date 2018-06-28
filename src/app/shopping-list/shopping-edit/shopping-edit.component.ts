import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service'


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  // @Output() addIngredient = new EventEmitter<Ingredient>();
  @ViewChild('nameInput') nameInput : ElementRef;
  @ViewChild('amountInput') amountInput : ElementRef;
  addNewIngredient(){

    // this.shoppinglistService.addIngredient()

  const ingName = this.nameInput.nativeElement.value;
  const ingAmount = this.amountInput.nativeElement.value;
  const newIngredient = new Ingredient(ingName, ingAmount);
  //this.addIngredient.emit({name : this.nameInput.nativeElement.value, amount : this.amountInput.nativeElement.value});
  // this.addIngredient.emit(newIngredient);
  this.shoppinglistService.addIngredient(newIngredient);
}
  constructor(private shoppinglistService : ShoppingListService) {}

  ngOnInit() {
  }

}
