import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashPipe } from './pipes/dash/dash.pipe';

const components = [
];

@NgModule({
  declarations: [...components, DashPipe],
  imports: [CommonModule],
  exports: [...components]
})
export class SharedModule {
}
