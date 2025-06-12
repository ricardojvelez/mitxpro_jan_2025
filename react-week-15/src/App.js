import './App.css';


//W15
import { AxiosComponent } from './W15/AxiosComponent/AxiosComponent';
import { FetchComponent } from './W15/FetchComponent/FetchComponent';
import { FetchComponentSinglePokemon } from './W15/FetchComponentSinglePokemon/FetchComponentSinglePokemon';

//W16
import { CounterApp as CreateContextExample } from './W16/CreateContextExample/CounterApp';
import { ComponentA as DrillDownExample } from './W16/DrillDownExample/ComponentA';


function App() {
  return (
    <div className="App">
      <h1>Week 16 Examples</h1>
      <CreateContextExample />
    </div>
  );
}

export default App;
