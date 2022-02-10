import './App.css';
import AddItem from './components/AddItem';
import Header from './components/Header';
import ItemList from './components/ItemList';
import { Provider } from './context/Main.context';

export default function App() {
  return (
    <Provider>
      <Header />
      <ItemList />
      <AddItem />
    </Provider>
  );
}
