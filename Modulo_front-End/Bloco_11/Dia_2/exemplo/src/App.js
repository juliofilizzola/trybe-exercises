import Image from './Image'
import './App.css';

function App() {
  
  const cat = {
    image: 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg',
    title: 'Cut cat Staring',
  }

  return (
      <div>
        <img src={ cat.image } alt={ cat.title } />
      </div>
  );
}

export default App;
