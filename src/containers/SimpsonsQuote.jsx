import React, { useState } from 'react';
import Load from '../components/quote/Load';
import Quote from '../components/quote/Quote';
import { getQuote } from '../services/simpsonsApi';

const SimpsonsQuote = () => {
  const [quote, setQuote] = useState({});

  const handleClick = async () => {
    const quote = await getQuote();
    setQuote(quote);
  };

  return (
    <>
      <Load onCLick={handleClick} />
      <Quote {...quote} />
    </>
  );
};

export default SimpsonsQuote;
