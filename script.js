var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    poster: 'https://imgc.allpostersimages.com/img/print/u-g-F9DGY50.jpg?w=296&h=450'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    poster: 'https://movieposters2.com/images/1093584-b.jpg'
  },
  {
    id: 3,
    title: 'Gwiezdne Wojny',
    desc: 'film o galaktycznej wojnie',
    poster: 'https://imgc.allpostersimages.com/img/print/u-g-EZYVJ0.jpg?w=299&h=450'
  },
  {
    id: 4,
    title: 'Blade Runner',
    desc: 'Film o łowcy androidów',
    poster: 'https://images-na.ssl-images-amazon.com/images/I/71H0Ynb-vzL._SY679_.jpg'
  }
];

var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
    React.createElement('h2', {}, movie.title),
    React.createElement('p', {}, movie.desc),
    React.createElement('img', {
        className: 'poster',
        src: movie.poster
    })
  );
});

var element =
    React.createElement('div', {},
      React.createElement('h1', {}, 'Lista Filmów'),
      React.createElement('ul', {}, moviesElements)
  );


ReactDOM.render(element, document.getElementById('app'));
