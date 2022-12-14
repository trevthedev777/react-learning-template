import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import StatefulGreeting from './components/StatefulGreeting';
import HooksCounter from './components/HooksCounter';

function App() {
  return (
    <div className="App">
      {/* <FunctionalGreeting name="Trevor" /> */}
      {/* <StatefulGreeting name="Trevor You Poes" /> */}
      <HooksCounter name="Mike" />
    </div>
  );
}

export default App;
