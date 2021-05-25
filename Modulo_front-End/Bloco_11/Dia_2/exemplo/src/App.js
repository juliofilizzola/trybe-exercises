  import React from 'react';
  import Album from './components/Album'
  import Image from './components/Image'
class App extends React.Component {
  render() {
    // Declaração do objeto contendo informações do album01
    const album01 = {
      image: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/Coldplay_-_Mylo_Xyloto.JPG/220px-Coldplay_-_Mylo_Xyloto.JPG',
      title: 'Mylo Xyloto',
      releaseDate: {
        year: '2011',
        month: '10',
        day: '24',
      },
      others: {
        recordCompany: 'Capitol, Parlophone',
        formats: 'CD, digital'
      }
    };
    
    
    const cat = {
      source: 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg',
      alternativeText: 'Cut cat Staring',
    }
    // Declaração do objeto contendo informações do album02
    const album02 = {
      image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/5/5d/Coldplay_-_Ghost_Stories.jpg/220px-Coldplay_-_Ghost_Stories.jpg',
      title: 'Ghost Stories',
      releaseDate: {
        year: '2014',
        month: '05',
        day: '16',
      },
      others: {
        recordCompany: 'Parlophone',
        formats: 'CD, digital'
      }
    };

    return (
    <div>
      <div>
        <Album album={ album01 } />
        <Album album={ album02 } />
      </div>
       <div>
       <Image im={ cat.source } alt= { cat.alternativeText }/>
    
      </div>
    </div>
    );
  }
}

export default App;
  
 
