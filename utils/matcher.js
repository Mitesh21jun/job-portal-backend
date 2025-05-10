// Helper: simple keyword match score
export const getKeywordMatchScore = (textA, textB) => {
  const aWords = new Set(textA.toLowerCase().split(/\W+/));
  const bWords = new Set(textB.toLowerCase().split(/\W+/));
  let score = 0;

  for (let word of aWords) {
    if (bWords.has(word)) score++;
  }
  const matched = Array.from(aWords).filter((word) => bWords.has(word));
  return { score, matched };
};
