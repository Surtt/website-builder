const Blog = () => {
  return (
    <div className="layout layout--blog">
      <header className="header header--empty">
        <p className="placeholder">Header</p>
        <button type="button" className="add-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path fillRule="evenodd" clipRule="evenodd"
              d="M0 20C0 8.96 8.96 0 20 0C31.04 0 40 8.96 40 20C40 31.04 31.04 40 20 40C8.96 40 0 31.04 0 20ZM22 22H30V18H22V9.99999H18V18H10V22H18V30H22V22Z"
              fill="#80CCF0" />
          </svg>
        </button>

        <div className="choose-elem ">
          <button type="button" className="choose-elem__btn">Заголовок H1</button>
          <button type="button" className="choose-elem__btn">Заголовок H2</button>
          <button type="button" className="choose-elem__btn">Заголовок H3</button>
          <button type="button" className="choose-elem__btn">Абзац текста</button>
          <button type="button" className="choose-elem__btn">Изображение</button>
        </div>

      </header>


      <div className="content content-1 content--empty">
        <p className="placeholder">Content</p>

        <button type="button" className="add-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path fillRule="evenodd" clipRule="evenodd"
              d="M0 20C0 8.96 8.96 0 20 0C31.04 0 40 8.96 40 20C40 31.04 31.04 40 20 40C8.96 40 0 31.04 0 20ZM22 22H30V18H22V9.99999H18V18H10V22H18V30H22V22Z"
              fill="#80CCF0" />
          </svg>
        </button>

        <div className="choose-elem ">
          <button type="button" className="choose-elem__btn">Заголовок H1</button>
          <button type="button" className="choose-elem__btn">Заголовок H2</button>
          <button type="button" className="choose-elem__btn">Заголовок H3</button>
          <button type="button" className="choose-elem__btn">Абзац текста</button>
          <button type="button" className="choose-elem__btn">Изображение</button>
        </div>

      </div>

      <div className="content content-2 content--empty">
        <p className="placeholder">Content</p>
        <button type="button" className="add-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path fillRule="evenodd" clipRule="evenodd"
              d="M0 20C0 8.96 8.96 0 20 0C31.04 0 40 8.96 40 20C40 31.04 31.04 40 20 40C8.96 40 0 31.04 0 20ZM22 22H30V18H22V9.99999H18V18H10V22H18V30H22V22Z"
              fill="#80CCF0" />
          </svg>
        </button>

        <div className="choose-elem ">
          <button type="button" className="choose-elem__btn">Заголовок H1</button>
          <button type="button" className="choose-elem__btn">Заголовок H2</button>
          <button type="button" className="choose-elem__btn">Заголовок H3</button>
          <button type="button" className="choose-elem__btn">Абзац текста</button>
          <button type="button" className="choose-elem__btn">Изображение</button>
        </div>

      </div>

      <footer className="footer footer--empty">
        <p className="placeholder">Footer</p>
        <button type="button" className="add-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path fillRule="evenodd" clipRule="evenodd"
              d="M0 20C0 8.96 8.96 0 20 0C31.04 0 40 8.96 40 20C40 31.04 31.04 40 20 40C8.96 40 0 31.04 0 20ZM22 22H30V18H22V9.99999H18V18H10V22H18V30H22V22Z"
              fill="#80CCF0" />
          </svg>
        </button>

        <div className="choose-elem ">
          <button type="button" className="choose-elem__btn">Заголовок H1</button>
          <button type="button" className="choose-elem__btn">Заголовок H2</button>
          <button type="button" className="choose-elem__btn">Заголовок H3</button>
          <button type="button" className="choose-elem__btn">Абзац текста</button>
          <button type="button" className="choose-elem__btn">Изображение</button>
        </div>

      </footer>

    </div>
  );
};

export default Blog;
