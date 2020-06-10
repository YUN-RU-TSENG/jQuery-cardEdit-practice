/**
 * IIFE 防止洩漏
 */
void function () {
  const card = $(".card"),
        addButton = $("button.add"),
        deleteButton = $("button.delete"),
        changeButton = $("button.change"),
        changeBackgroundButton = $("input.changeBackground");

  addButton.on("click", addText);
  deleteButton.on("click", deleteElement);
  changeButton.on("click", changeTextColorClosure());
  changeBackgroundButton.on("input", changeBackgroundColor);

  /**
   * 新增卡片段落 <p>
   */
  function addText() {
    $(".card p").length < 10
      ? $(
          `<p>第 ${
            $(".card p").length + 1
          } 段，Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad aut mollitia nostrum illum eveniet inventore aliquam, perferendis ipsa. Deleniti eum, vero aut officiis corrupti quasi voluptates. Consectetur inventore fuga quos.</p>`
        ).appendTo(card)
      : alert("最多新增到十個段落～");
}

  /**
   * 刪除卡片段落 <p>
   */
  function deleteElement() {
    $(".card p").length ? $(".card p").last().remove() : alert("已經刪除所有段落！請新增段落");
  }

  /**
   * 更換卡片文字顏色
   */
  function changeTextColorClosure() {
    // 利用閉包建立私有變數前一個顏色，當重複顏色重新計算一次
    let lastColor;
    return function changeTextColor() {
      const color = ["red", "pink", "tomato", "lightgreen", "black"],
            randomNumber = Math.round((color.length - 1) * Math.random()),
            randomColor = color[randomNumber];
      if (randomColor === lastColor) return colorChange();
      lastColor = randomColor;
      $(".card")[0].style.color = randomColor;
    };
  }

  /**
   * 更換卡片背景顏色
   * @param {*} jQuery 傳入的事件物件
   */
  function changeBackgroundColor(e) {
    $(".card")[0].style.backgroundColor = e.currentTarget.value;
  }
  
}();