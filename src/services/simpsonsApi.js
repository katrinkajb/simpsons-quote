export const getQuote = async () => {
  const res = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes');
  const json = await res.json();

  return {
    character: json[0].character,
    quote: json[0].quote,
    image: json[0].image,
  };
};
