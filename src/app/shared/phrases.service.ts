import { Injectable } from '@angular/core';
import { PHRASES } from './moke-data';
import { PhraseInterfase } from './phrase.interfase';

const phrasesPromise: Promise<PhraseInterfase[]> = new Promise((resolve) => {
  setTimeout(() => {
    resolve(PHRASES)
  }, 2000)
});

@Injectable({
  providedIn: 'root'
})
export class PhrasesService {

  constructor() { }

  getAllPhrases(): Promise<PhraseInterfase[]> {
    return phrasesPromise
  }

  getPhrase(id: number): Promise<PhraseInterfase | undefined> {
    return phrasesPromise.then(
      phrases => phrases.find(phrase => phrase.id === id));
  }
}
