import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsModule } from './products.module';
import { ProductsComponent } from './products.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { TermLifeProductComponent } from './term-life-product/term-life-product.component';
import { WholeLifeProductComponent } from './whole-life-product/whole-life-product.component';

const routes: Routes = [
    {
        path: '',
        component: ProductsComponent,
        children: [
            {
                path: '',
                component: AllProductsComponent
            },
            {
                path: 'term-life',
                component: TermLifeProductComponent
            },
            {
                path: 'whole-life',
                component: WholeLifeProductComponent
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductsRoutingModule { }
