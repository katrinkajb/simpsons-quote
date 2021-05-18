import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import SimpsonsQuote from './SimpsonsQuote';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
  rest.get('https://thesimpsonsquoteapi.glitch.me/quotes', (req, res, ctx) => {
    return res(
      ctx.json([
        {
          character: 'Homer Simpson',
          quote:
            'I believe the children are the future... Unless we stop them now!',
          image:
            'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939',
          characterDirection: 'Left',
        },
      ])
    );
  })
);

describe('SimpsonsQuote container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('fetches a quote from the Simpsons API and displays it on the page', async () => {
    render(<SimpsonsQuote />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    return waitFor(() => {
      screen.getByAltText('Homer Simpson');
      screen.getByText(
        '"I believe the children are the future... Unless we stop them now!" -- Homer Simpson'
      );
    });
  });
});
