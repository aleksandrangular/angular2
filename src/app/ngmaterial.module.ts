import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';


@NgModule({
imports: [[MatButtonModule], [MatTableModule]],
exports: [[MatButtonModule], [MatTableModule]]
})
export class MaterialAppModule {}