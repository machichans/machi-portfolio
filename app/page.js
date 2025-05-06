import Header from "./components/Header";

export default function Home() {
  return (
    <div>
        <Header></Header>
        
        <main>
            <div className="main-cont">
                <img className="main-icon" src="ぷちゃん.jpg" alt="アイコン" />
                <div className="main-text">
                <div className="prof">
                    <p className="big-text">ぷちゃん</p>
                    <p className="small-text">tiny poodle</p>
                </div>
                <p className="ball-list">三大特技</p>
                <ul>
                    <li className="yellow-ball">くるん</li>
                    <li className="pink-ball">おすわり</li>
                    <li className="orange-ball">はな</li>
                </ul>
                </div>
            </div>
        </main>
        <footer>
            <p>Copyright© mako</p>
        </footer>
    </div>
  );
}
