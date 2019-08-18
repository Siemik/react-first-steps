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

var moviesElements = movies.map(function (movie) {
  return React.creatElement(Movie, {kay: movie.id, movie: movie})
})

//class
var MovieTitle = React.creatClass({
  propTypes: {
    title: React.PropTypes.string.isRequired
  },
  render: function () {
    retur {
      React.createElement('h2', {}, this.props.title)
    }
  }
})

var MovieDesc = React.creatClass({
  propTypes: {
    desc: React.PropTypes.string.isRequired
  },
  render: function () {
    return (
      React.createElement('p', {}, this.props.desc)
    )
  }
})

var MoviePoster = React.creatClass({
  propTypes: {
    poster: React.PropTypes.string.isRequired
  },
  render: function () {
    return (
      React.creatElement('img', {src: this.props.poster})
    )
  }
})

var Movie = React.creatClass({
  propTypes: {
    movie: React.propTypes.object.isRequired
  },
  render: function () {
    return (
      React.createElement('li', {src: this.props.movie.id},
        React.creatElement(MovieTitle, {this.props.mobie.title}),
          React.creatElement(MovieDesc, {desc: this.props.mobie.desc}),
            React.creatElement(MoviePoster, {poster: this.props.mobie.poster})
      )
    )
  }
})

var element =
    React.createElement('div', {},
      React.createElement('h1', {}, 'Lista Filmów'),
      React.createElement('ul', {}, moviesElements)
  );


ReactDOM.render(element, document.getElementById('app'));
