import './App.css';
import { NavBar } from "./components/NavBar"; 


function App({ rollData }) {
  //const [page, setPage] = useState('')
  //const [login, setLogin] = useState(null)

  return (
    <section>
     <div className="App">
      <h2>Fresh. Raw. Social Sushi.</h2>
      </div>
      <NavBar />
    </section>

    //{page === 'friends' && (<div><Friends /></div>)}
  );
}

export default App;
