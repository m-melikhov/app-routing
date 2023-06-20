import { Component, OnInit } from '@angular/core';
import { PHRASES } from '../../shared/moke-data';
import { PhraseInterfase } from '../../shared/phrase.interfase';
import { PhrasesService } from '../../shared/phrases.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-phrase-details',
  templateUrl: './phrase-details.component.html',
  styleUrls: ['./phrase-details.component.scss']
})
export class PhraseDetailsComponent implements OnInit {

  phrase?: PhraseInterfase;

  constructor(
    private phrasesService: PhrasesService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params): void => {
      const id: number = +params['id'];

      this.phrasesService
        .getPhrase(id)
        .then(res => {
          this.phrase = res;
        });
    })
  }

  gotoPhraseList(): void {
    this.router.navigate(['/phrases', {
      id: this.phrase?.id,
      param1: 'test',
      param2: 123
    }]).catch();
  }
}
