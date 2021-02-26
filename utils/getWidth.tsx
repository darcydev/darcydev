export type IWidth = 'default' | 'bleed' | 'narrow' | 'full';

export const getWidth = (width: IWidth): string => {
  switch (width) {
    case 'default':
      return 'var(--max-width)';
    case 'bleed':
      return 'var(--max-width-bleed)';
    case 'narrow':
      return 'var(--max-width-narrow)';
    case 'full':
      return 'var(--max-width-full)';
    default:
      return 'var(--max-width)';
  }
};
