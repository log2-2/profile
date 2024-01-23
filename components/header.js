// コンポーネントを表示する関数
function renderComponent() {
  const myComponentElement = document.getElementById("header");
  myComponentElement.innerHTML = `
    <div class="container-fluid text-center p-0">
      <section>
        <div class="row justify-content-center m-0 py-4">
          <h1 class="p-0 m-0">自己紹介サイト</h1>
        </div>
       
      </section>
      <nav
        class="navbar navbar-expand-sm navbar-light border-top border-bottom border-normal"
      >
        <div class="container-fluid">
          <!-- Navbar toggler for mobile view -->
          <button
            class="navbar-toggler ms-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style="box-shadow: none"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <!-- Navbar links -->
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mx-auto">
              <li class="nav-item mx-4">
                <a class="nav-link" href="index.html">プロフィール</a>
              </li>
              <li class="nav-item mx-4">
                <a class="nav-link" href="favorite.html">聖地巡礼</a>
              </li>
              <li class="nav-item mx-4">
                <a class="nav-link" href="reference.html">使用したもの</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  `;
}

// ページが読み込まれたときにコンポーネントを表示
document.addEventListener("DOMContentLoaded", renderComponent);
