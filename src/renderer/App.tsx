import './App.css';
import Container from './components/Container';
import AddItem from './components/AddItem';
import Header from './components/Header';
import ItemList from './components/ItemList';
import { Provider } from './context/Main.context';

export default function App() {
  return (
    <Provider>
      <Container>
        <Header />
        <ItemList />
        <AddItem />
      </Container>
    </Provider>
  );
}
