

function Card() {
  const VOCABULARY_SAMPLE = [
    {
      id: 1,
      word: "Misnomer",
      phonetics: "/mɪsˈnəʊmə/",
      defination: "misnaming someone or something"
    },
    {
      id: 2,
      word: "Source",
      phonetics: "/sɔːs/",
      defination: "A point of origin"
    },

    {
      id: 3,
      word: "Procurement",
      phonetics: "/prəˈkjʊr.mənt, prəˈkjʊə.mənt/",
      defination: "Process of procuring"
    },
    {
      id: 4,
      word: "Procure",
      phonetics: "/prəˈkjʊə,prəˈkjɔː/",
      defination: "To get something"
    }
  ];

  return (
    <div>
      <h3>{VOCABULARY_SAMPLE[0].word}</h3>
      <p>How to pronounce: <span>{VOCABULARY_SAMPLE[0].phonetics}</span></p>
      <p>Defination: {VOCABULARY_SAMPLE[0].defination}</p>

    </div>
  );
}

export default Card




