import { Component, OnInit } from '@angular/core';
import { AccountService } from './account/account.service';
import { BasketService } from './basket/basket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {  
  title = 'Skinet';

  constructor(private basketService: BasketService, private accountService: AccountService) { }

  ngOnInit(): void {
    this.loadBasket();
    this.loadUser();
  } 

  loadBasket() {
    const basketId = localStorage.getItem('basket_id');
    if (basketId) {
      this.basketService.getBasket(basketId).subscribe(() => {
        console.log('initialised basket');
      }, error => {
        console.log(error);

      });
    }
  }

  loadUser() {
    const token = localStorage.getItem('token');
    if (token) {
      this.accountService.loadCurrentUser(token).subscribe(() => {
        console.log('loaded user');
      }, error => {
        console.log(error);
      });
    }
  }
}
