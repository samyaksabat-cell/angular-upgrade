import { NgModule } from '@angular/core';
import { NbCardModule } from '@nebular/theme';
import { EditorModule } from '@tinymce/tinymce-angular';

import { ThemeModule } from '../../@theme/theme.module';

import { EditorsRoutingModule, routedComponents } from './editors-routing.module';

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    EditorsRoutingModule,
    EditorModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class EditorsModule { }
