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

var Movie = React.createClass ({
    propTypes: {
        movie: React.PropTypes.object.isRequired
    },
    render: function() {
        return (
          React.createElement('li', {key: this.props.movie.id},
            React.createElement(MovieTitle, {title: this.props.movie.title}),
            React.createElement(MovieDescription, {description: this.props.movie.desc}),
            React.createElement(MoviePoster, {image: this.props.movie.poster}),
            )
        )
    },
});

var MoviePoster = React.createClass ({
    propTypes: {
        poster: React.PropTypes.object.isRequired
    },
    render: function () {
        return (
          React.createElement('img', {src: this.props.image})
        )
    },
});

var MovieTitle = React.createClass ({
    propTypes: {
        title: React.PropTypes.string.isRequired
    },
    render: function () {
        return (
          React.createElement('h2', {}, this.props.title)
        )
    },
});

var MovieDescription = React.createClass({
    propTypes: {
        description: React.PropTypes.string.isRequired
    },
    render: function() {
        return (
          React.createElement('p', {}, this.props.description)
        )
    },
});

var MoviesList = React.createClass({
    propTypes: {
        movies: React.PropTypes.array.isRequired
    },
    render: function() {
        return (
          React.createElement('div', {},
            React.createElement('h1', {}, 'Lista filmwów'),
            React.createElement('ul', {}, moviesElements(this.props.movies))
            )
        )
    },
});

var moviesElements = function(movies) {
    return movies.map(function(movie) {
      return React.createElement(Movie, {key: movie.id, movie: movie});
    });
};
var element = React.createElement(MoviesList, {movies: movies});

ReactDOM.render(element, document.getElementById('app'));
