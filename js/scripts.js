function checkIfPalindrome(word){
  var reverseWord = Array.from(word).reverse().join("");
  if (word === reverseWord){
    return [true,reverseWord];
  }
  return [false,reverseWord];
}

$(document).ready(function(){
  $("form").submit(function(e){
    e.preventDefault();
    var word = $("input").val();
    console.log(word)
    var result = checkIfPalindrome(word);
    $("#result").text(word + (result[0] ? " is ":" is not ") + "equal to " + result[1]);
  })

})