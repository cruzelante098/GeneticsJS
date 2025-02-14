/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { UniformCrossover } from '../../../crossover/base';
import { BaseIndividual, BinaryIndividual } from '../../../individual/';
import { UniformCrossoverMock } from '../../resources/mocks/crossover/base/uniform/UniformCrossoverMock';

import { Generator } from '../../../generator/utils';
// mocks
jest.mock('../../../generator/utils/');

// data
import { Binary } from '../../resources/mocks/crossover/base/uniform/data/';

const uniformCrossoverTestSuite = <I extends BaseIndividual<T>, T>(
  mock: Array<UniformCrossoverMock<I, T>>,
  message: string,
  cross: UniformCrossover<I, T>,
) => {
  describe(message, () => {
    mock.forEach(mockTest => {
      test(`Individuals => ${mockTest.firstParent} x ${mockTest.secondParent}`, () => {
        const mockedGenerator = Generator as jest.Mocked<typeof Generator>;
        mockedGenerator.probabilityIsValid.mockReturnValue(true);
        mockTest.generatedValues.forEach(mockedProbability => {
          mockedGenerator.generateProbability.mockReturnValueOnce(mockedProbability);
        });
        const result = cross.cross(
          mockTest.firstParent,
          mockTest.secondParent,
          mockTest.params.individualConstructor,
          mockTest.params.selectionThreshold,
          mockTest.params.engine,
        );
        expect(result[0]).toEqual(mockTest.offspring[0]);
        expect(result[1]).toEqual(mockTest.offspring[1]);
      });
    });
  });
};

describe('Uniform crossover tests', () => {
  uniformCrossoverTestSuite(Binary, 'With binary individual', new UniformCrossover<BinaryIndividual, boolean>());
});
