function myMax(array) {
  var max = array[0];
  for (var i = 0; i < array.length; i++) {
    if (array[i] > max)
      max = array[i];
  };
  return max;
};

function vowelCount(string) {
  var vowels = ["a","e","i","o","u","y"]
  var numberOfVowels = 0
  for (var i = 0; i < string.length; i++) {
    if (vowels.indexOf(string.charAt(i)) > -1)
      numberOfVowels += 1
  }
  return numberOfVowels
};

function reverse(string) {
  var newString = ""
  for (var i = 0; i < string.length + 1; i++) {
    newString += string.charAt(string.length - i)
  }
  return newString
}

// console.log(myMax([4,1,6,-9,2]))
// console.log(vowelCount("Hi my name is Cody the Loyd"))
console.log(reverse("dyoL eht ydoC si eman yM !iH"))
