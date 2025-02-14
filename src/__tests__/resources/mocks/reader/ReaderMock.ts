/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { BaseIndividual } from '../../../../individual/base/BaseIndividual';

interface ReaderMock<I extends BaseIndividual<T>, T> {
  creation: Array<{
    representation: string;
    expected: I;
  }>;
  error: string[];
}

export default ReaderMock;
