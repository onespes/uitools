import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sentenceCase',
})
export class SentenceCasePipe implements PipeTransform {
  transform(value: string, overrides: string[] = []): string {
    // Split the string into words
    const words = value.split(/\s+/);

    // Process each word
    const processedWords = words.map((word, index) => {
      // Check if the word (without trailing punctuation) is in the overrides list
      const wordWithoutPunctuation = word.replace(/[.,!?;:]+$/, '');
      if (overrides.includes(wordWithoutPunctuation)) {
        return word; // Return the word as is (unchanged, including punctuation)
      }
      
      // If it's the first word, capitalize it
      if (index === 0) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }

      // Otherwise, return the word in lowercase
      return word.toLowerCase();
    });

    // Join the words back into a single string
    let sentence = processedWords.join(' ');

    // Capitalize letters following sentence-ending punctuation
    sentence = sentence.replace(/([.!?])\s*([a-z])/g, (match, p1, p2) => {
      return p1 + ' ' + p2.toUpperCase();
    });

    return sentence;
  }
}
