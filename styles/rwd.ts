import {
  css, CSSObject, SimpleInterpolation, FlattenSimpleInterpolation,
} from 'styled-components';
import { remCalc } from './utils';

export enum Breakpoint {
  SMALL = 'SMALL',
  MEDIUM = 'MEDIUM',
  LARGE = 'LARGE',
  XLARGE = 'XLARGE',
}

type RWDFunction = (
  arg: CSSObject | TemplateStringsArray, ...interpolations: SimpleInterpolation[]
) => FlattenSimpleInterpolation;

export interface RWDObject {
  [Breakpoint.SMALL]: RWDFunction;
  [Breakpoint.MEDIUM]: RWDFunction;
  [Breakpoint.LARGE]: RWDFunction;
  [Breakpoint.XLARGE]: RWDFunction;
}

const sizes = {
  [Breakpoint.SMALL]: `${remCalc(576)}em`,
  [Breakpoint.MEDIUM]: `${remCalc(768)}em`,
  [Breakpoint.LARGE]: `${remCalc(1024)}em`,
  [Breakpoint.XLARGE]: `${remCalc(1280)}em`,
};

/**
 * Helper rwd object to handle media breakpoints in styled components
 * @example
 * styled.div`
 *  width: 100%;
 *
 *  ${rwd[Breakpoint.MEDIUM]`
 *    width: 50%;
 *  `}
 * `
 */
const rwd = Object.keys(sizes).reduce<RWDObject>((acc: RWDObject, label) => {
  acc[(label as Breakpoint)] = (...args) => css`
    @media (min-width: ${sizes[(label as Breakpoint)]}) {
      ${css(...args)}
    }
  `;

  return acc;
}, ({} as RWDObject));

export default rwd;
