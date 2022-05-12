import MovieList from './MovieList';

function App() {
  return (
    <div>
      <h1>Min filmlista</h1>
      <h2>AddMovie</h2>
      <MovieList />
    </div>
    <div>
      <button class="btn btn-primary" onClick={addMovie}>Lägg till film</button>
      <button class="btn btn-primary" onClick={addMovie}>Lägg till film</button>
    </div>
  );
}

export default App;
