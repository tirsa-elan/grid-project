import { ColDef } from 'ag-grid-community'

export const ItemSelectionColumns: ColDef[] = [
    { field: "make", headerName: "making", floatingFilter: true },
    { field: "model", headerName: "modeling", editable: true, cellDataType: "object", floatingFilter: true },
    { field: "price", headerName: "picing", editable: false, filter: true, floatingFilter: true },
    { field: "electric", headerName: "electronic", filter: true, floatingFilter: true }
]