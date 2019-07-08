import {
  AfterContentInit, AfterViewInit,
  Component,
  OnInit,
} from '@angular/core';
import { Theme, ThemeService } from '../../services/theme/theme.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {
  themeControl: FormControl = new FormControl();

  constructor(private theme: ThemeService) {
    setTimeout(() => {
      this.themeControl.disable();
    }, 3000);
  }

  switchTheme(newTheme: Theme): void {
    this.theme.setTheme(newTheme);
  }

  ngAfterViewInit() {
    this.themeControl.valueChanges
        .subscribe({
          next: value => {
            console.log(value);
            this.switchTheme(value ? 'theme-black' : 'theme-white');
          }
        });
  }
}
