import Header from './Header.js';
import Main from './Main.js';

export default function app() {
  return (
    <div className="app">
      <Header />

      <Main className="main">
        <p>1/15</p>
        <p>Question?</p>
      </Main>
    </div>
  );
}
