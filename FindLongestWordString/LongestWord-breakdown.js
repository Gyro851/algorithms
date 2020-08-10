function findLongestWordLength(str) {
  // str = "The quick brown fox jumped over the lazy dog"

  var words = str.split(' ');
  // words = [ 'The','quick','brown','fox','jumped','over','the','lazy','dog' ]

  var maxLength = 0;

  // words.length = 9
  for (var i = 0; i < words.length; i++) {
    if (words[i].lenght > maxLength) {
      // (words[i], words[i].length, maxLength.length) = The 3 0  quick 5 3  jumped 6 5

      maxLength = words[i].length;
      // maxLength = The quick jumped
    }
  }

  return maxLength;
  // maxLength = 'jumped'
  // maxLength.length = 6
}

x = findLongestWordLength('The quick brown fox jumped over the lazy dog');
