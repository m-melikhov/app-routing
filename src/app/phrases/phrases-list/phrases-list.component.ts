import { Component, OnInit } from '@angular/core';
import { PhraseInterfase } from '../../shared/phrase.interfase';
import { PHRASES } from '../../shared/moke-data';
import { PhrasesService } from '../../shared/phrases.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phrases-list',
  templateUrl: './phrases-list.component.html',
  styleUrls: ['./phrases-list.component.scss']
})
export class PhrasesListComponent implements OnInit {

  phrases!: PhraseInterfase[];

  constructor(private phrasesService: PhrasesService, private router: Router) { }

  ngOnInit(): void {
    this.phrasesService
      .getAllPhrases()
      .then(res => {
        this.phrases = res;
      });
  }

  onSelect(phrase: PhraseInterfase): void {
    this.router.navigate(['phrase', phrase.id]).catch()
  }
}
