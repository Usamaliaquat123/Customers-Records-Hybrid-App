import { NgModule } from '@angular/core';
import { CustomerFilterPipe } from './customer-filter/customer-filter';
@NgModule({
	declarations: [CustomerFilterPipe],
	imports: [],
	exports: [CustomerFilterPipe]
})
export class PipesModule {}
