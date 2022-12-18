import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import StatefulGreeting from './components/StatefulGreeting';
import HooksCounter from './components/HooksCounter';
import StatefulGreetingTwo from './components/StatefulGreetingWithCallback';
import StatefulGreetingWithCallBack from './components/StatefulGreetingWithCallback';
import StatefulGreetingWithCallbackWithPrevState from './components/StatefulGreetingWithCallbackWithPrevState.js';
// Events
import EventsClasses from './components/EventsClasses';
import EventsFunctional from './components/EventsFunctional';

function App() {
  return (
    <div className="App">
      {/* <FunctionalGreeting name="Trevor" /> */}
      {/* <StatefulGreeting name="Trevor You Poes" /> */}
      {/* <HooksCounter name="Mike" /> */}
      {/* <StatefulGreetingTwo greeting="This is a message from the class component"/> */}
      {/* <StatefulGreetingWithCallBack /> */}
      {/* <StatefulGreetingWithCallbackWithPrevState /> */}
      <EventsFunctional />
      <EventsClasses />
    </div>
  );
}

export default App;
