/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { BaseGenerator, GeneratorParams } from '../base';
import { Generator } from '../utils';
import { BinaryIndividual } from './../../individual/binary';

/**
 * ## BinaryGeneratorParams
 * Params of the BinaryGenerator.
 */
export interface BinaryGeneratorParams extends GeneratorParams {
  /**
   * Chance or probability of generating a gene
   * with the value `true`.
   */
  chance: number;
}

/**
 * ## BinaryGenerator
 * Generator of binary individuals.
 */
export class BinaryGenerator extends BaseGenerator<BinaryIndividual, BinaryGeneratorParams, boolean> {
  /**
   * Throws an exception if chance is not in
   * range [0.0 - 1.0].
   * @param chance that is going to be tested.
   * @throws RangeError if chance is not in range.
   */
  protected static checkChance(chance: number) {
    if (!Generator.probabilityIsValid(chance)) {
      throw new RangeError(`BinaryGenerator: chance ${chance} is not in range [0.0 - 1.0]`);
    }
  }

  /**
   * Generates an individual with the specified
   * params.
   * @param length of the individual.
   * @param chance of a generated gene to be `true`.
   *        By default is `0.5`.
   * @param engine (of `random-js`) that is going to be used.
   * @return The [[BinaryIndividual]] with the generated genotype.
   * @throws RangeError if `length` is not greater than `0`.
   * @throws RangeError if `chance` is not in range [0.0 - 1.0].
   */
  public generate(length: number, chance: number = 0.5, engine = Generator.DEFAULT_ENGINE): BinaryIndividual {
    const params = { chance, engine, length };
    return this.generateWith(params);
  }

  /**
   * Generates a gene with the specified params.
   * @param params of the generator.
   * @return the generated gene.
   */
  public generateGene(params: BinaryGeneratorParams): boolean {
    return Generator.generateBoolean(params.chance, params.engine);
  }

  /**
   * Generates an individual with the specified
   * params.
   * @param params of the generator.
   * @return The [[BinaryIndividual]] with the generated genotype.
   * @throws RangeError if `chance` is not in range [0.0 - 1.0].
   * @throws RangeError if `length` is not greater than `0`.
   */
  public generateWith(params: BinaryGeneratorParams): BinaryIndividual {
    BinaryGenerator.checkChance(params.chance);
    return super.generateWith(params);
  }

  /**
   * Construct a [[BinaryIndividual]] given
   * a genotype.
   * @param genotype
   */
  public construct(genotype: boolean[]): BinaryIndividual {
    return new BinaryIndividual(genotype);
  }
}
