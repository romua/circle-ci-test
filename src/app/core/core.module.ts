import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './components/content/content.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SettingsGroupComponent } from './components/dashboard/settings-group/settings-group.component';

const components = [
  ContentComponent, HeaderComponent, HomeComponent, DashboardComponent, SettingsGroupComponent
];

@NgModule({
  imports: [CommonModule, AppRoutingModule, SharedModule, FormsModule, ReactiveFormsModule],
  declarations: [...components],
  exports: [...components, AppRoutingModule, SharedModule]
})
export class CoreModule {
}
