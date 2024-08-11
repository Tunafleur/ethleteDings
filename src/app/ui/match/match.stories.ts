import type { Meta, StoryObj } from '@storybook/angular';
import { MatchComponent } from './match.component';
import { Badges, getDateMinusDays, getDatePlusDays } from './match.util';

export default {
  title: 'Match',
  component: MatchComponent,
  tags: ['autodocs'],
  render: (args: StoryObj<MatchComponent>) => ({
    props: {
      ...args,
    },
  }),
  argTypes: {
    badges: {
      control: {
        type: 'multi-select',
      },
      options: Object.values(Badges),
    },
  },
} as Meta<MatchComponent>;

type MatchStory = StoryObj<MatchComponent>;

export const ShowWinLoose: MatchStory = {
  args: {
    playerOne: {
      id: '1',
      name: 'GuterJunge1',
      score: [1, 2, 3, 4, 5],
      endPoints: 100,
      scoreSum: 15,
      showWin: true,
      showEndPoints: false,
      win: true,
    },
    playerTwo: {
      id: '2',
      name: 'GoodGirl3',
      score: [9, 7, 3, 2, 1],
      endPoints: 30,
      scoreSum: 22,
      showWin: true,
      showEndPoints: false,
      win: false,
    },
    upcomingDateTime: getDateMinusDays(2),
    loading: false,
    badges: [Badges.Live, Badges.Highlight],
  },
};

export const ShowPoints: MatchStory = {
  args: {
    playerOne: {
      id: '1',
      name: 'Achim23',
      score: [3, 3, 2],
      endPoints: 100,
      scoreSum: 15,
      showWin: false,
      showEndPoints: true,
      win: true,
    },
    playerTwo: {
      id: '2',
      name: 'Anton443',
      score: [9, 2, 3],
      endPoints: 30,
      scoreSum: 22,
      showWin: false,
      showEndPoints: true,
      win: false,
    },
    upcomingDateTime: getDateMinusDays(2),
    loading: false,
    badges: [Badges.VODStream],
  },
};

export const futureMatch: MatchStory = {
  args: {
    playerOne: {
      id: '1',
      name: 'HansEnt23',
      score: [3, 3, 2],
      endPoints: 100,
      scoreSum: 15,
      showWin: false,
      showEndPoints: true,
      win: true,
    },
    playerTwo: {
      id: '2',
      name: 'Dustin223',
      score: [9, 2, 3],
      endPoints: 30,
      scoreSum: 22,
      showWin: false,
      showEndPoints: true,
      win: false,
    },
    upcomingDateTime: getDatePlusDays(2),
    loading: false,
    badges: [Badges.Highlight, Badges.gameIcon],
  },
};

export const loadingMatch: MatchStory = {
  args: {
    playerOne: {
      id: '1',
      name: 'HansEnt23',
      score: [3, 3, 2],
      endPoints: 100,
      scoreSum: 15,
      showWin: false,
      showEndPoints: true,
      win: true,
    },
    playerTwo: {
      id: '2',
      name: 'Dustin223',
      score: [9, 2, 3],
      endPoints: 30,
      scoreSum: 22,
      showWin: false,
      showEndPoints: true,
      win: false,
    },
    upcomingDateTime: getDatePlusDays(2),
    loading: true,
    badges: [Badges.Highlight],
  },
};
