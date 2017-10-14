const CHAR_TYPE_WORD = 'word';
const CHAR_TYPE_END = 'end';

export const parseWordToolTip = (word, tooltip) => {
  let title;
  if (word.charType === CHAR_TYPE_END) {
    title = `Verse ${word.verseKey.split(':')[1]}`;
  } else if (word.charType === CHAR_TYPE_WORD) {
    title = word[tooltip].text;
  } else {
    title = '';
  }
  return title;
};
