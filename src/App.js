import './App.css';
import Mounting from './Mounting';
import Lginform from './Lginform';
// import Eventhandlings from './Eventhandlings';
import Secondloginform from './Secondloginform';
import Calculator from './Calculator';
import Formvalidation from './Formvalidation';
import Userslist from './Userslist';


function App() {
  return (
    <div className="App">
      <Mounting/>
      <Lginform/>
      <hr/>
      {/* <Eventhandlings/> */}
      <hr/>
      <Secondloginform/>
      <Userslist/>
      <Calculator/>

      <Formvalidation/>

      
    </div>
  );
}

export default App;
