import { Provider } from "react-redux";
import {store} from './state/store';
import RepositoriesList from './components/RepositoriesList'
function App() {
  return <Provider store={store}>
    <div>
      <h1>Search for a Package</h1>
      <RepositoriesList />
    </div>
    </Provider>
}

export default App;
