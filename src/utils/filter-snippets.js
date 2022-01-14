/**
 * Filter snippets scoped to a language identifier
 * @param {object} allSnippets Parsed JSON from a snippets json file
 * @param {string} lang The language identifier to filter the snippets by
 * @returns An object containing only snippets scoped to the specific language identifier
 */
function filterSnippets(allSnippets, lang) {
  const filteredKeys = Object.keys(allSnippets).filter((key) => {
    const langs = allSnippets[key].scope?.split(',').map((lang) => lang.trim());
    return !!langs?.includes(lang);
  });
  if (!filteredKeys.length) {
    return {};
  }

  const langSnippets = {};

  for (const key of filteredKeys) {
    // delete the redundant 'scope' key
    delete allSnippets[key].scope;
    langSnippets[key] = allSnippets[key];
  }
  return langSnippets;
}

module.exports = { filterSnippets };
