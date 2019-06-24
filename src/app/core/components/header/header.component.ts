import {
  AfterContentInit,
  Component,
  OnInit,
} from '@angular/core';
import { Theme, ThemeService } from '../../services/theme/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterContentInit {
  hi = false;

  constructor(private theme: ThemeService) {
    this.theme.setTheme('theme-white');
  }

  ngOnInit() {
  }

  switchTheme(newTheme: Theme): void {
    this.hi = !this.hi;
    this.theme.setTheme(newTheme);
  }

  ngAfterContentInit(): void {
  }
}
