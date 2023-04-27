import { useMediaQuery } from '@mui/material';

/**
 * Хук для получения актуальной высоты header
 * Значения взяты из vars.scss --header_height
 *
 * @returns {number} текущую высоту header в px
 * @example
 *
 * import { useHeaderHeight } from 'shared/hooks';
 *
 * export const SomeComponent = () => {
 *  const headerHeight = useHeaderHeight();
 *  ...
 * }
 */
export const useHeaderHeight = () => {
  const matches = useMediaQuery('(max-width:767px)');
  return matches ? 60 : 80;
};
