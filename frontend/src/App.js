import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import { Button } from '@chakra-ui/button';
import HomePage from './Pages/HomePage';
import ChatPage from './Pages/ChatPage';

function App() {
  return (
    <div className="App">
       <Route path="/" component={HomePage} exact></Route>
       <Route path="/chats" component={ChatPage} exact></Route>
    </div>
  );
}

export default App;
