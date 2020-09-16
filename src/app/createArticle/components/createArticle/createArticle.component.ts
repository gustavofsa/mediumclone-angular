import { Component } from '@angular/core';

@Component({
  selector: 'mc-create-article',
  templateUrl: './createArticle.component.html',
  styleUrls: ['./createArticle.component.scss'],
})
export class CreateArticleComponent {
  initialValues = {
    title: 'Foo',
    description: 'Bar',
    body: 'Baz',
    tagList: ['213'],
  };

  onSubmit(res: any) {
    console.log('res', res);
  }
}
