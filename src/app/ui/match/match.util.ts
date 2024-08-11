export enum matchThemeEnum {
  dark1,
  dark2,
  dark3,
}

export enum Badges {
  Live = 'live',
  Highlight = 'highlight',
  LiveStream = 'livestream',
  VODStream = 'vodstream',
  Stream = 'stream',
  gameIcon = 'game_png',
}

export interface Player {
  id: string;
  name: string;
  imageUrl?: string;
  score?: number[];
  scoreSum?: number;
  endPoints?: number;
  win?: boolean;
  showEndPoints?: boolean;
  showWin?: boolean;
}

export function getTimeFromDate(date?: Date): string | undefined {
  if (!date) {
    return undefined;
  }

  return date.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
}

export function getMonthFromDate(date?: Date): string | undefined {
  if (!date) {
    return undefined;
  }
  const options: Intl.DateTimeFormatOptions = {
    month: 'short',
    day: '2-digit',
  };
  return date.toLocaleDateString('en-US', options);
}

export function getDatePlusDays(extradays: number = 2): Date {
  const date = new Date();
  date.setDate(date.getDate() + extradays);
  return date;
}

export function getDateMinusDays(extradays: number = 2): Date {
  const date = new Date();
  date.setDate(date.getDate() - extradays);
  return date;
}
