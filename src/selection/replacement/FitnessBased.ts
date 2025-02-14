/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { BaseIndividual } from '../../individual/base/BaseIndividual';
import { PopulationItem } from '../../population/Population';
import { BaseReplacement } from './BaseReplacement';

export class FitnessBased<I extends BaseIndividual<T>, T> extends BaseReplacement<I, T> {
  public sortMethod(a: PopulationItem<I, T>, b: PopulationItem<I, T>): number {
    return b.fitness - a.fitness;
  }
}
