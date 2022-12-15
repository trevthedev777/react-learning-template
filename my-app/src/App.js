import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import StatefulGreeting from './components/StatefulGreeting';
import HooksCounter from './components/HooksCounter';
import StatefulGreetingTwo from './components/StatefulGreetingWithCallback';
import StatefulGreetingWithCallBack from './components/StatefulGreetingWithCallback';
import StatefulGreetingWithCallbackWithPrevState from './components/StatefulGreetingWithCallbackWithPrevState.js';

function App() {
  return (
    <div className="App">
      {/* <FunctionalGreeting name="Trevor" /> */}
      {/* <StatefulGreeting name="Trevor You Poes" /> */}
      {/* <HooksCounter name="Mike" /> */}
      {/* <StatefulGreetingTwo greeting="This is a message from the class component"/> */}
      {/* <StatefulGreetingWithCallBack /> */}
      <StatefulGreetingWithCallbackWithPrevState />
    </div>
  );
}

export default App;
