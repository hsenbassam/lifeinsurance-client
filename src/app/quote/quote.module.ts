import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../_shared/shared.module';
import { QuoteRoutingModule } from './quote-routing.module';
import { QuoteResultComponent } from './quote-result/quote-result.component';
import { QuoteComponent } from './quote.component';
import { CountrySelectComponent } from '../utils/country-select/country-select.component';
import { OccupationSelectComponent } from '../utils/occupation-select/occupation-select.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        QuoteRoutingModule
    ],
    declarations: [
        QuoteComponent,
        QuoteResultComponent,
        CountrySelectComponent,
        OccupationSelectComponent,
    ]
})
export class QuoteModule { }
