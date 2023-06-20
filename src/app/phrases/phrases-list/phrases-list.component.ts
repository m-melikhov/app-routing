import { Component, OnInit } from '@angular/core';
import { PhraseInterfase } from '../../shared/phrase.interfase';
import { PHRASES } from '../../shared/moke-data';
import { PhrasesService } from '../../shared/phrases.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-phrases-list',
  templateUrl: './phrases-list.component.html',
  styleUrls: ['./phrases-list.component.scss']
})
export class PhrasesListComponent implements OnInit {

  phrases!: PhraseInterfase[];
  private selectedId!: number;

  constructor(
    private phrasesService: PhrasesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.selectedId = +params['id'];

      this.phrasesService
        .getAllPhrases()
        .then(res => {
          this.phrases = res;
        });
    });


  }

  onSelect(phrase: PhraseInterfase): void {
    this.router.navigate(['phrases', phrase.id]).catch()
  }

  isSelected(phrase: PhraseInterfase): boolean {
    return phrase.id === this.selectedId;
  }

}

