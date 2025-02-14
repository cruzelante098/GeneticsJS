/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { Generator } from '../../../generator/utils';
import { IntegerIndividual } from '../../../individual/numeric/integer';
import { NumericNonUniformMutation, NumericNonUniformMutationParams as CreepMutationParams } from '../base';

export class CreepMutation extends NumericNonUniformMutation<IntegerIndividual> {
  protected getDeltaValue(params: CreepMutationParams): number {
    return Generator.generateNormalDistributionInteger(0, params.stepSize, params.engine);
  }
}

export { CreepMutationParams };
