// Helper: simple keyword match score
export const getKeywordMatchScore = (textA, textB) => {
  const aWords = new Set(textA.toLowerCase().split(/\W+/));
  const bWords = new Set(textB.toLowerCase().split(/\W+/));
  let matches = 0;

  for (let word of aWords) {
    if (bWords.has(word)) matches++;
  }

  return matches;
};
