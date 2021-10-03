import logo from './logo.svg';
import './App.css';
import './asstes/css/styles.css';


function App() {
  return (
    <div>
    <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
      <h1 className="title red">Hamza Ayechi </h1>
      <br />
      <img src="/imageInPublic.jpg" width={50} height={50} />
      <br />
      <img src="/imageInPublic.jpg" width={50} height={50} />
    </div>
    <video width={320} height={240} controls>
      <source src="" type="video/mp4" />
    </video>
  </div>
  );
}

export default App;
