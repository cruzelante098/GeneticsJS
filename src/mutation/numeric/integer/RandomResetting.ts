/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { Generator } from '../../../generator/utils';
import { IntegerIndividual } from '../../../individual/numeric/integer';
import { UniformMutation, UniformMutationParams as RandomResettingParams } from '../../base';

export class RandomResetting extends UniformMutation<IntegerIndividual, number> {
  protected mutateGeneUniformly(individual: IntegerIndividual, index: number, params: RandomResettingParams): void {
    const value = params.particularValue?.(index);
    if (value !== undefined) {
      individual.set(index, value);
    } else {
      individual.set(index, Generator.generateInteger(individual.range, params.engine));
    }
  }
}

export { RandomResettingParams };
