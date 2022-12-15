import { useEffect, useState } from 'react';

export const BreakingBadApi = () => {
  const [quote, setQuote] = useState([]);
  const [character, setCharacter] = useState('Walter White');

  // const breakingBadApi = async () => {
  //   const response = await fetch(
  //     'https://api.breakingbadquotes.xyz/v1/quotes/5'
  //   );
  //   const result = await response.json();
  //   setQuote(result);
  // };

  const filteredQuote = async () => {
    const response = await fetch(
      'https://api.breakingbadquotes.xyz/v1/quotes/25'
    );
    const result = await response.json();
    const filtered = result.filter((res) => res.author === character);
    setQuote(filtered);
  };

  useEffect(() => {
    filteredQuote();
  }, []);

  return (
    <div className="App">
      <h1>To practice api calls</h1>

      <h3>Which character do you want to read?</h3>

      <input
        type="text"
        placeholder="Write the name of the character"
        name="character"
        value={character}
        onChange={(e) => setCharacter(e.target.value)}
      />

      <div>
        {quote.map((q) => (
          <div key={q.quote}>
            <h3>{q.author}</h3>
            <p>{q.quote}</p>
          </div>
        ))}
      </div>
      <button onClick={filteredQuote}>Get another quote</button>
    </div>
  );
};
