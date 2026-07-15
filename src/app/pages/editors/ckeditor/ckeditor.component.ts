import { Component } from '@angular/core';

@Component({
  selector: 'ngx-ckeditor',
  template: `
    <nb-card>
      <nb-card-header>
        CKEditor (TinyMCE)
      </nb-card-header>
      <nb-card-body>
        <editor
          [init]="{
            height: 320,
            menubar: false,
            plugins: 'advlist autolink lists link image charmap print preview anchor',
            toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat'
          }"
        ></editor>
      </nb-card-body>
    </nb-card>
  `,
})
export class CKEditorComponent {
}