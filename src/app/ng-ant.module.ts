import {NgModule} from '@angular/core';

import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzDropDownModule} from 'ng-zorro-antd/dropdown';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzInputNumberModule} from 'ng-zorro-antd/input-number';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {NzPaginationModule} from 'ng-zorro-antd/pagination';
import {NzSwitchModule} from 'ng-zorro-antd/switch';
import {NzTableModule} from 'ng-zorro-antd/table';
import {NzIconModule} from 'ng-zorro-antd/icon';

@NgModule({
	exports: [
		NzButtonModule,
		NzDropDownModule,
		NzFormModule,
		NzInputModule,
		NzInputNumberModule,
		NzLayoutModule,
		NzMenuModule,
		NzPaginationModule,
		NzSwitchModule,
		NzTableModule,
    NzIconModule
	]
})
export class NgAntModule {

}
