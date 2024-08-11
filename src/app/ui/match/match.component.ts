import { CommonModule } from '@angular/common';
import { Component, computed, input, Signal } from '@angular/core';
import { Badges, getMonthFromDate, getTimeFromDate, matchThemeEnum, Player } from './match.util';

@Component({
  selector: 'eth-match',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './match.component.html',
  styleUrl: './match.component.scss',
})
export class MatchComponent {
  playerOne = input<Player>();
  playerTwo = input<Player>();
  upcomingDateTime = input<Date>();
  loading = input<boolean>();
  theme = input<matchThemeEnum>();
  badges = input<Badges[]>();

  getTimeFromDate = getTimeFromDate;
  getMonthFromDate = getMonthFromDate;

  pastMatch: Signal<boolean>;

  constructor() {
    this.pastMatch = computed(() => {
      return this.upcomingDateTime() ? this.upcomingDateTime()! < new Date() : false;
    });
  }

  getBadgeUrlWithFileFormat(badgeName: string): string {
    if (!badgeName) {
      return '';
    }

    //badgeName = 'game_png'; should be game.png
    return badgeName?.split('_')[0] + '.' + badgeName?.split('_')[1];
  }
}
