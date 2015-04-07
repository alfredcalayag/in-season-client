// Javascript for the home page

var fruitTemplate = function(fruitData) {
  console.log(fruitData);
  var newFruitDiv = "<div class='fruit'>";
  var fruitName = fruitData["fruit_name"];
  newFruitDiv += 'Name: ' + fruitName;
  newFruitDiv += ' Category: ' + fruitData["category"];
  newFruitDiv += '</div>';
  return newFruitDiv;
}

$.ajax({
  url:"http://localhost:3000/fruits",
  type: "get"
}).done(function(data){
  // console.log(data[1]);
  data.forEach(function(fruitData){
    $('body').append(fruitTemplate(fruitData));
  })
}).fail(function(){
  console.log("You effed up");
})