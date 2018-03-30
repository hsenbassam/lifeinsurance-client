import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Quote } from '../../_models/quote';
import { Rates } from '../../_models/rates';
import { AuthService } from '../../_services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ShoppingCartService } from '../../_services/shopping-cart.service';
import { AppError } from '../../common/app-error';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'quote-result',
  templateUrl: './quote-result.component.html',
  styleUrls: ['./quote-result.component.css']
})
export class QuoteResultComponent implements OnInit {


  @Input('quote') quote: Quote;
  @Input('rates') rates: Rates;
  @Input('type') type: string;

  cartProducts;



  constructor(
    public authService: AuthService, 
    private cartService: ShoppingCartService,
    private _router: Router, 
    private _route: ActivatedRoute,
    public snackBar: MatSnackBar) {

    this.quote = new Quote();
    this.cartProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];
  }

  ngOnInit() { }

  register(package_type) {

    this.addProductToLocalStorage(package_type);
    console.log(JSON.parse(localStorage.getItem("cartProducts")))
    this._router.navigate(['/register'], { queryParams: { returnUrl: "shopping-cart" } });
  }

  addToCart(package_type) {
    let cartProduct = this.generateProduct(package_type);
    let userId = this.authService.userInfo.id;
    this.cartService.post(cartProduct, userId)
        .subscribe(response => {
          console.log(response);
         this.openSnackBar("You are added new product to the Cart", "Dismiss")
        },
        (error: AppError) => {
          if (error instanceof AppError) {
            console.log("Adding Product to a Cart is Failed");
          }
          else
            throw error;
        });
  }

  private addProductToLocalStorage(package_type) {
    let cartProduct = this.generateProduct(package_type);
    this.cartProducts.push(cartProduct);
    localStorage.setItem("cartProducts", JSON.stringify(this.cartProducts)); 
  }

  private openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000
    });
  }

  private generateProduct(package_type) {

    let p_type;
    let premium;

    switch (package_type) {
      case "basic":
        p_type = "Basic";
        premium = this.rates.basic_monthly;
        break;
      case "plus":
        p_type = "Plus";
        premium = this.rates.plus_monthly;
        break;
      case "ultra":
        p_type = "Ultra";
        premium = this.rates.ultra_monthly;
        break;
    }

    let cartProduct = {
      "type": this.typeFormat(this.type),
      "package": p_type,
      "amount": this.quote.amount,
      "coverage": this.quote.coverage ? this.quote.coverage + "-Year Guarenteed Level Term" : "Lifetime Insurance",
      "premium": premium
    }
    return cartProduct;

  }

  private typeFormat(type) {
    let str = type.split("-").join(" ");
    return str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); }) + " Insurance";
  }


}
