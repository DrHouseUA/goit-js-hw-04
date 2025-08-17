'use strict';

function slugify(title) {
  let slug = '';
  const lowerCasedTitle = title.toLowerCase();
  const words = lowerCasedTitle.split(' ');
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 0) {
      slug += words[i];
      if (i < words.length - 1) {
        slug += '-';
      }
    }
  }
  return slug;
}

console.log(slugify('Arrays for beginners')); // "arrays-for-beginners"
console.log(slugify('English for developer')); // "english-for-developer"
console.log(slugify('Ten secrets of JavaScript')); // "ten-secrets-of-javascript"
console.log(slugify('How to become a JUNIOR developer in TWO WEEKS')); // "how-to-become-a-junior-developer-in-two-weeks"
