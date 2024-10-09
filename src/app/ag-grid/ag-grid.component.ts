import { Component, Input } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { AG_GRID_LOCALE_IR } from '@ag-grid-community/locale'

@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.scss']
})
export class AgGridComponent {
 @Input()rowData!: any[] 
 @Input()columnData !: ColDef[];


 localeText = AG_GRID_LOCALE_IR;

}
