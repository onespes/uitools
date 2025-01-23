import { Component, computed, signal } from '@angular/core';
import { SentenceCasePipe } from '../../pipes/sentence-case.pipe';
import { FormsModule } from '@angular/forms';
import { CustomTitleCasePipe } from '../../pipes/title-case.pipe';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-case-converter',
  imports: [
    CustomTitleCasePipe,
    TitleCasePipe,
    SentenceCasePipe,
    LowerCasePipe,
    UpperCasePipe,
    FormsModule,
    ClipboardModule,
  ],
  templateUrl: './case-converter.component.html',
  styleUrl: './case-converter.component.scss',
})
export class CaseConverterComponent {
  inputText = signal('');
  override = signal('');
  overWrittenWords = computed(() => {
    return this.override().split(/\s+/);
  });
}
