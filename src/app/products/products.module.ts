import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductCardComponent } from '../products/all-products/product-card/product-card.component';
import { ProductItemComponent } from '../products/product-item/product-item.component';
import { TermLifeProductComponent } from '../products/term-life-product/term-life-product.component';
import { WholeLifeProductComponent } from '../products/whole-life-product/whole-life-product.component';

import { SharedModule } from '../_shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { AllProductsComponent } from './all-products/all-products.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        ProductsRoutingModule
    ],
    declarations: [
        ProductsComponent,
        AllProductsComponent,
        ProductCardComponent,
        ProductItemComponent,
        TermLifeProductComponent,
        WholeLifeProductComponent
    ],
    exports: [
        ProductsComponent,
        AllProductsComponent,
        ProductCardComponent,
        ProductItemComponent,
        TermLifeProductComponent,
        WholeLifeProductComponent
    ]
})
export class ProductsModule { }
