// Triple slash directive qui inclut 'crud.d.ts'
/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from "./interface";
import * as CRUD from './crud';

// Création d'un objet RowElement
const row: RowElement = {
    firstName: "Guillaume",
    lastName: "Salva"
};

// Insertion row
const newRowID: RowID = CRUD.insertRow(row)

// Update row
const updatedRow: RowElement = {
    ...row, age: 23
};

// Appeller CRUD updateRow et CRUD deleteRow
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
