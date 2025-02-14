/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { BaseIndividual } from '../../individual/base';
import { Crossover, CrossoverParams as BaseCrossoverParams } from './Crossover';

export abstract class BaseCrossover<I extends BaseIndividual<T>, T, Params extends BaseCrossoverParams<I, T>>
  implements Crossover<I, T, Params> {
  public abstract cross(firstParent: I, secondParent: I, ...args: any[]): I[];

  public crossWith(firstParent: I, secondParent: I, params: Params): I[] {
    this.checkParents(firstParent, secondParent);
    const parentsLength = firstParent.length();
    const genotypes: T[][] = [[], []];
    for (let i = 0; i < parentsLength; i++) {
      const result = this.getGenotypeValues(firstParent, secondParent, params, i);
      genotypes[0].push(result.first);
      genotypes[1].push(result.second);
    }
    // @ts-ignore
    return [new params.individualConstructor(genotypes[0], firstParent.range), new params.individualConstructor(genotypes[1], secondParent.range)];
  }

  protected abstract getGenotypeValues(
    firstParent: I,
    secondParent: I,
    params: Params,
    index: number,
  ): { first: T; second: T };

  protected parentsAreValid(firstParent: I, secondParent: I): boolean {
    return firstParent.length() === secondParent.length() && firstParent.length() > 1;
  }

  protected checkParents(firstParent: I, secondParent: I) {
    if (!this.parentsAreValid(firstParent, secondParent)) {
      throw new Error('NPointsCrossover: both parents must have the same length.');
    }
  }
}
