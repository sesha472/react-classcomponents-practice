import './App.css';
import Mounting from './Mounting';
import Lginform from './Lginform';
// import Eventhandlings from './Eventhandlings';
import Secondloginform from './Secondloginform';
import Calculator from './Calculator';


function App() {
  return (
    <div className="App">
      <Mounting/>
      <Lginform/>
      <hr/>
      {/* <Eventhandlings/> */}
      <hr/>
      <Secondloginform/>

      <Calculator/>
      
    </div>
  );
}

export default App;
