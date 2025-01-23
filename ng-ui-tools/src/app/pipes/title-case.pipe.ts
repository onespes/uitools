import { Pipe, PipeTransform } from '@angular/core';
const minorWords = [
  'and',
  'the',
  'of',
  'in',
  'to',
  'a',
  'an',
  'for',
  'but',
  'or',
  'at',
  'by',
  'on',
  'with',
];

@Pipe({
  name: 'customTitleCase',
})
export class CustomTitleCasePipe implements PipeTransform {
  transform(value: string, overrides: string[] = []): string {
    return value
      .split(/\s+/)
      .map((word, index, array) => {
        // Check if the word (without trailing punctuation) is in the overrides list
        const wordWithoutPunctuation = word.replace(/[.,!?;:]+$/, '');
        if (overrides.includes(wordWithoutPunctuation)) {
          return word; // Return the word as is (unchanged, including punctuation)
        }

        // lower case the word
        word = word.toLowerCase();

        // Always capitalize the first and last word
        if (index === 0 || index === array.length - 1) {
          return word.charAt(0).toUpperCase() + word.slice(1);
        }
        // Capitalize the word if it's not a minor word
        if (!minorWords.includes(word)) {
          return word.charAt(0).toUpperCase() + word.slice(1);
        }
        // Otherwise, return the word as is (lowercase)
        return word;
      })
      .join(' ');
  }
}
