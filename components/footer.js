// コンポーネントを表示する関数
function renderComponent() {
  const myComponentElement = document.getElementById("footer");
  myComponentElement.innerHTML = `
    <div class="text-end p-3"><a href="#">▲トップに戻る</a></div>
    <div class="container-fluid text-end border-top border-normal p-3">
      <p>&copy; log2-2</p>
    </div>
  `;
}

// ページが読み込まれたときにコンポーネントを表示
document.addEventListener("DOMContentLoaded", renderComponent);
