import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="App-portfolio">
        <h1 className="Portfolio-title">Profile</h1>
        <div className="Portfolio-name">まめかと（氏名）</div>
        <div className="Portfolio-group">
          <div className="Portfolio-image"></div>
          <div className="Portfolio-group2">
            <div className="Portfolio-birthday">生年月日：1998年10月19日</div>
            <div className="Portfolio-language">使用言語：Ruby、Javascript、etc...</div>
            <div className="Portfolio-thing">ひとこと：やる気だけはあります！！</div>
          </div>
        </div>
      </div>
      <div className="App-career">
        <h1 className="Career-title">Career</h1>
        <div className="Career-group">
          <div className="Career-pj">199x年：xxxプロジェクトに従事</div>
          <div className="Career-pj">199x年：xxxプロジェクトに従事</div>
          <div className="Career-pj">199x年：xxxプロジェクトに従事</div>
          <div className="Career-pj">199x年：xxxプロジェクトに従事</div>
          <div className="Career-pj">199x年：xxxプロジェクトに従事</div>
          <div className="Career-pj">199x年：xxxプロジェクトに従事</div>
          <div className="Career-pj">199x年：xxxプロジェクトに従事</div>
          <div className="Career-pj">199x年：xxxプロジェクトに従事</div>
        </div>
      </div>
    </div>
  );
}

export default App;
