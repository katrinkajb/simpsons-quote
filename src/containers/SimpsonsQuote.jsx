import React, { useState } from 'react';
import Load from '../components/quote/Load';
import Quote from '../components/quote/Quote';
import { getQuote } from '../services/simpsonsApi';

function SimpsonsQuote() {
  const [quote, setQuote] = useState({});
  const [loading, setLoading] = useState(true);

  const handleClick = async () => {
    const quote = await getQuote();
    setQuote(quote);
    setLoading(false);
  };

  return (
    <>
      <Load onClick={handleClick} />
      {loading === true && <h1>Loading</h1>}
      {loading === false && <Quote {...quote} />}
    </>
  );
}

export default SimpsonsQuote;
