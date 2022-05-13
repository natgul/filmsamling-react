import MovieList from './MovieList';

function App() {
  return (
    <div>
      <h1 className="display-5 mb-4 mt-4">Min filmlista</h1>
      <h5 className="fw-normal p-0">Lägg till Film</h5>
      <hr></hr>
      <MovieList />
    </div> 
  );
}

export default App;
