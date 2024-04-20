import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkeletonModule } from 'primeng/skeleton';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { AvatarModule } from 'primeng/avatar';
import { SplitterModule } from 'primeng/splitter';
import { AccordionModule } from 'primeng/accordion';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    ButtonModule,
    SkeletonModule,
    InputGroupModule,
    InputGroupAddonModule,
    AvatarModule,
    SplitterModule,
    AccordionModule,
    TableModule
  ]
})
export class PrimengModule { }
