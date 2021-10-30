import "./styles.css";

const onclickAdd = () => {
  //テキストボックスの値を取得し初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createincompleteList(inputText);
};

//未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

//未完了リストに追加する関数
const createincompleteList = (text) => {
  //divタグの生成
  const div = document.createElement("div");
  div.className = "list-row";

  //liタグの生成
  const li = document.createElement("li");
  li.innerText = text;

  //button(完了)タグの生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //押された完了ボタンの親タグ<div>を未完了リストから移動?
    deleteFromIncompleteList(completeButton.parentNode);

    //完了リストへ追加する要素
    const addTarget = completeButton.parentNode;

    //TODOテキスト内容を取得
    const text = addTarget.firstElementChild.innerText;

    //div以下を　初期化
    addTarget.textContent = null;

    //liタグを生成
    const li = document.createElement("li");
    li.innerText = text;

    //buttonタグの生成
    const retarnButton = document.createElement("button");
    retarnButton.innerText = "戻す";
    retarnButton.addEventListener("click", () => {
      //押された戻すボタンの親タグ(div)を完了リストから削除
      const deleteButton = retarnButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteButton);

      //テキストを取得
      const text = retarnButton.parentNode.firstElementChild.innerText;
      createincompleteList(text);
    });

    //divタグの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(retarnButton);

    //完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
    //retarnButton.addEventListener("click")
  });

  //button(削除)タグの生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ<div>を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  //divタグの子要素に各要素を設定する
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onclickAdd());
