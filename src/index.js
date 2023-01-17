import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する。
  const inputText = document.getElementById("add-text").value;

  //入力値が空白の時、リストに追加しない。
  if (inputText === "") {
    return;
  }

  // 入力値の初期化
  document.getElementById("add-text").value = "";

  //liを生成
  const li = document.createElement("li");
  li.className = "list-row";

  // pを生成
  const p = document.createElement("p");
  p.innerText = inputText;

  // button（完了）を生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";

  // 完了ボタンを押した時の処理
  completeButton.addEventListener("click", () => {
    // 押された完了ボタンの"li"(list-row)を削除
    deleteFromImcomplete(completeButton.parentNode);

    // 削除した"li"を完了したTODOに追加
    document
      .getElementById("complete-list")
      .appendChild(completeButton.parentNode);

    // "完了"、"削除"ボタンを非表示にする
    completeButton.style.display = "none";
    deleteButton.style.display = "none";

    // "戻す"ボタンを表示する。
    returnButton.style.display = "block";
  });

  // button（削除)を生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";

  // 削除ボタンを押した時の処理
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの"li"(list-row)を削除
    deleteFromImcomplete(deleteButton.parentNode);
  });

  // button（戻す）を生成
  const returnButton = document.createElement("button");
  returnButton.innerText = "戻す";
  returnButton.style.display = "none";

  // 戻すボタンを押した時の処理
  returnButton.addEventListener("click", () => {
    document.getElementById("imcomplete-list").appendChild(li);
    // "戻す"ボタンを非表示
    returnButton.style.display = "none";
    // "完了"、"削除"ボタンを表示
    completeButton.style.display = "block";
    deleteButton.style.display = "block";
  });

  // liの子要素に各要素を設定
  li.appendChild(p);
  li.appendChild(completeButton);
  li.appendChild(deleteButton);
  li.appendChild(returnButton);

  // 未完了のリストに追加
  document.getElementById("imcomplete-list").appendChild(li);

  // 未完了リストから指定の要素を削除
  const deleteFromImcomplete = (target) => {
    document.getElementById("imcomplete-list").removeChild(target);
  };
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
