import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck, Host,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges, SkipSelf, ViewChild
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, map, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-settings-group',
  templateUrl: './settings-group.component.html',
  styleUrls: ['./settings-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsGroupComponent implements OnInit,
    DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  public tmpFramework = null;
  @ViewChild('inputField', {static: false}) inputField;

  constructor(@SkipSelf() private cdRef: ChangeDetectorRef) {
  }

  ngOnInit() {
    console.log('init');
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
    fromEvent(this.inputField.nativeElement, 'keyup')
        .pipe(
            tap(next => console.log(next)),
            map((next: KeyboardEvent) => next.target as HTMLInputElement),
            debounceTime(1000),
        )
        .subscribe(
            {
              next: next => {
                // console.log(next);
                console.log(next.value);
              },
              error: err => {
                console.log(err);
              },
              complete: () => console.log('subscription completed'),
            }
        );
  }

  ngAfterViewChecked(): void {
    console.log('after view checked');
  }

  ngOnDestroy(): void {
    console.log('on destroy');
  }
}
