import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestDriveRoutingModule } from './test-drive-routing.module';
import { TestDriveComponent } from './test-drive.component';


@NgModule({
  declarations: [
    TestDriveComponent
  ],
  imports: [
    CommonModule,
    TestDriveRoutingModule
  ]
})
export class TestDriveModule { }
