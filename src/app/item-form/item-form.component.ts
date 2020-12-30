import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { createForm, FormType, subformComponentProviders } from 'ngx-sub-form';
import { ItemFormData } from '../models';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css'],
  providers: subformComponentProviders(ItemFormComponent),
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemFormComponent {
  form = createForm<ItemFormData>(this, {
    formType: FormType.SUB,
    formControls: {
      title: new FormControl(null, [Validators.required]),
    },
  });
}
