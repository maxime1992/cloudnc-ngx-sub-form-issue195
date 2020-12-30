import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { createForm, FormType, subformComponentProviders } from 'ngx-sub-form';
import { ItemFormData, ListFormData } from '../models';

@Component({
  selector: 'app-list-form',
  templateUrl: './list-form.component.html',
  styleUrls: ['./list-form.component.css'],
  providers: subformComponentProviders(ListFormComponent),
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListFormComponent {
  form = createForm<ItemFormData[], ListFormData>(this, {
    formType: FormType.SUB,
    formControls: {
      items: new FormArray([]),
    },
    toFormGroup: (obj: ItemFormData[]): ListFormData => {
      return {
        items: !obj ? [] : obj,
      };
    },
    fromFormGroup: (formValue: ListFormData): ItemFormData[] => {
      return formValue.items;
    },
    createFormArrayControl: (key, value) => {
      return new FormControl(value);
    },
  });

  public removeItem(index: number): void {
    this.form.formGroup.controls.items.removeAt(index);
  }

  public addItem(): void {
    this.form.formGroup.controls.items.push(
      this.form.createFormArrayControl('items', {
        title: '',
      })
    );
  }
}
