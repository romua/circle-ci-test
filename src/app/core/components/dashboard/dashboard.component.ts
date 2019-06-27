import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements
    OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {


  constructor(private cdRef: ChangeDetectorRef) {
    this.cdRef.detach();
    setTimeout(() => {
      console.log('marked for check');
      this.cdRef.markForCheck();
    }, 4000);
  }

  ngOnInit() {
    console.log('on init');
  }

  ngDoCheck(): void {
    console.log('do check');
  }

  ngAfterContentInit(): void {
    console.log('after content init');
  }

  ngAfterContentChecked(): void {
    console.log('after content checked');
  }

  ngAfterViewInit(): void {
    console.log('after view init');
  }

  ngAfterViewChecked(): void {
    console.log('after view checked');
  }

  ngOnDestroy(): void {
    console.log('on destroy');
  }
}
