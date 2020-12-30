import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  form: FormGroup = new FormGroup({
    items: new FormControl([]),
    header: new FormControl(''),
  });

  ngOnInit() {
    of({
      items: [{ title: 'Item 1' }, { title: 'Items 2' }, { title: 'Item 3' }],
      header: 'Header',
    })
      .pipe(delay(1000))
      .subscribe((data) => {
        this.form.patchValue(data);
      });
  }
}
