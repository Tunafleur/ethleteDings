import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatchComponent } from './ui/match/match.component';
import { Badges, getDateMinusDays, getDatePlusDays, Player } from './ui/match/match.util';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ethleteDings';
  Badges = Badges;

  getDateMinusDays = getDateMinusDays;
  getDatePlusDays = getDatePlusDays;

  playerOne: Player = {
    id: '1',
    name: 'PlayerE1ns',
    score: [1, 2, 3, 4, 5],
    endPoints: 100,
    scoreSum: 15,
    showWin: true,
    showEndPoints: false,
    win: true,
  };

  playerTwo: Player = {
    id: '2',
    name: 'Player2wei',
    score: [9, 7, 3, 2, 1],
    endPoints: 30,
    scoreSum: 22,
    showWin: true,
    showEndPoints: true,
    win: false,
  };
}
