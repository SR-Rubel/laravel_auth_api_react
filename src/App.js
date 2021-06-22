import './App.scss';
import Header from './components/Header';
import StateProvider from './State_container'

function App() {
  return (
    <div className="App">
      <StateProvider>
        <Header />
      </StateProvider>
    </div>
  );
}

export default App;
