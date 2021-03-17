import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from "./components/sidebar/Sidebar";
import Chat from "./components/Chat/Chat";

function App() {
  return (
    <div className="App">
       <div className="app-body">
            <Sidebar/>
            <Chat/>
       </div>
    </div>
  );
}

export default App;
