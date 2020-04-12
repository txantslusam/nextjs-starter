/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components';
import rwd, { Breakpoint } from '../../styles/rwd';
import { remCalc } from '../../styles/utils';

interface GridContainerProps {
  fullWidth?: boolean;
}

export const GridContainer = styled.div<GridContainerProps>`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  padding: 0 1rem;

  ${rwd[Breakpoint.SMALL]`
    max-width: ${remCalc(576)}rem;
  `}

  ${rwd[Breakpoint.MEDIUM]`
    max-width: ${remCalc(768)}rem;
  `}

  ${rwd[Breakpoint.LARGE]`
    max-width: ${remCalc(1024)}rem;
  `}

  ${rwd[Breakpoint.XLARGE]`
    padding: 0;
    max-width: ${remCalc(1200)}rem;
  `}

  ${props => props.fullWidth && css`
    padding: 0;

    ${rwd[Breakpoint.SMALL]`
      max-width: none;
    `}

    ${rwd[Breakpoint.MEDIUM]`
      max-width: none;
    `}

    ${rwd[Breakpoint.LARGE]`
      max-width: none;
    `}

    ${rwd[Breakpoint.XLARGE]`
      max-width: none;
    `}
  `}
`;

export const GridRow = styled.div`
  display: flex;
  flex-direction: row;
`;

interface GridColumnProps {
  center?: boolean;
}

export const GridColumn = styled.div<GridColumnProps>`
  display: flex;
  flex-direction: column;
  flex: 1;

  ${props => props.center && css`
    align-items: center;
  `}
`;
