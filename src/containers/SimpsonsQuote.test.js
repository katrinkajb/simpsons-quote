import React from 'react';
import { render } from '@testing-library/react';
import SimpsonsQuote from './SimpsonsQuote';

describe('SimpsonsQuote container', () => {
  it('fetches a quote from the Simpsons API and displays it on the page', async () => {
    render(<SimpsonsQuote />);
  });
});
