void function () {
  // 選擇器，返回一個物件，不是 nodelist、HTMLcollection 而是 jquery 特有的
  const card = $(".card");
  // 選擇是否包含 p 的 section
  // const cardSecond = $("section").has("p");

  const addButton = $("button.add");
  const deleteButton = $("button.delete");
  const changeButton = $("button.change");
  const changeBackgroundButton = $("input.changeBackground");
  // const newPElement = $(
  //   "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>"
  // );

  addButton.on("click", function add() {
    // 會失效，不可以重複插入
    // card.append(newPElement)

    $(".card p").length <= 10
      ? $(
          `<p>第 ${
            $(".card p").length + 1
          } 段，Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad aut mollitia nostrum illum eveniet inventore aliquam, perferendis ipsa. Deleniti eum, vero aut officiis corrupti quasi voluptates. Consectetur inventore fuga quos.</p>`
        ).appendTo(card)
      : alert("最多新增到十個段落～");
  });

  deleteButton.on("click", function deleteElement() {
    $(".card p").length ? $(".card p").last().remove() : alert("已經刪除所有段落！請新增段落");
  });

  changeButton.on("click", change());
  // 文章內容文字變色
  function change() {
    // 利用閉包建立私有變數前一個顏色，當重複顏色重新計算一次
    let lastColor;
    return function colorChange() {
      const color = ["red", "pink", "tomato", "lightgreen", "black"];
      const randomNumber = Math.round((color.length - 1) * Math.random());
      const randomColor = color[randomNumber];
      console.log(lastColor, randomColor, randomNumber);
      if (randomColor === lastColor) return colorChange();
      lastColor = randomColor;
      $(".card")[0].style.color = randomColor;
    };
  }

  changeBackgroundButton.on("input", function (e) {
    $(".card")[0].style.backgroundColor = e.currentTarget.value;
  });
}();
