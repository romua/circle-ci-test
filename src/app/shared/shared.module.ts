import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashPipe } from './pipes/dash/dash.pipe';
import { SwitchComponent } from './components/switch/switch.component';

const components = [
  SwitchComponent
];

const pipes = [
  DashPipe
];

@NgModule({
  declarations: [...components, ...pipes],
  imports: [CommonModule],
  exports: [...components, ...pipes]
})
export class SharedModule {
}
