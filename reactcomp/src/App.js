import logo from './logo.svg';
import './App.css';
import Adresse from './component/profile/Address'
import Name  from './component/profile/FullName';
import PP from './component/profile/ProfilePhoto';

function App() {
  return (
    <div className="App">
      <PP/>
     <Name/>
     <Adresse/>
     
     
    </div>
  );
}

export default App;
