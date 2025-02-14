/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { Generator } from '../../../../../../../generator/utils';
import { BinaryIndividual } from '../../../../../../../individual/binary';
import NPointsCrossoverMock from '../NPointsCrossoverMock';

const mocks: Array<NPointsCrossoverMock<BinaryIndividual, boolean>> = [
  {
    crossoverPoints: [1, 3],
    firstParent: new BinaryIndividual('10001'),
    offspring: [new BinaryIndividual('11001'), new BinaryIndividual('10010')],
    params: {
      engine: Generator.DEFAULT_ENGINE,
      individualConstructor: BinaryIndividual,
      numberOfCrossoverPoints: 2,
    },
    secondParent: new BinaryIndividual('11010'),
  },
  {
    crossoverPoints: [1],
    firstParent: new BinaryIndividual('10'),
    offspring: [new BinaryIndividual('11'), new BinaryIndividual('00')],
    params: {
      engine: Generator.DEFAULT_ENGINE,
      individualConstructor: BinaryIndividual,
      numberOfCrossoverPoints: 1,
    },
    secondParent: new BinaryIndividual('01'),
  },
  {
    crossoverPoints: [1, 2, 3, 4, 5, 6],
    firstParent: new BinaryIndividual('1001011'),
    offspring: [new BinaryIndividual('1000001'), new BinaryIndividual('0011111')],
    params: {
      engine: Generator.DEFAULT_ENGINE,
      individualConstructor: BinaryIndividual,
      numberOfCrossoverPoints: 6,
    },
    secondParent: new BinaryIndividual('0010101'),
  },
];

export default mocks;
