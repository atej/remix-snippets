const { src, dest, watch, parallel } = require('gulp');
const merge = require('gulp-merge-json');
const { filterSnippets } = require('./src/utils/filter-snippets');

const langs = ['typescript', 'typescriptreact'];

const snippetsSource = './src/snippets/**/*.json';

const collateTasks = langs.map((lang) => {
  const task = () =>
    src(snippetsSource)
      .pipe(
        merge({
          fileName: `snippets-${lang}.json`,
          edit: (parsedJson) => filterSnippets(parsedJson, lang),
        })
      )
      .pipe(dest('./dist'));
  task.displayName = `collate ${lang}`;
  return task;
});

exports.dev = function () {
  watch(snippetsSource, parallel(...collateTasks));
};
exports.build = parallel(...collateTasks);
