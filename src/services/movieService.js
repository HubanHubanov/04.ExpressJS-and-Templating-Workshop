const movies = [{
    _id: 1,
    title: 'Jungle cruise',
    genre: 'adventure',
    director: 'Stallone',
    year: '2222',
    imageUrl: '/img/the-little-mermaid.jpg',
    rating: '5',
    description: 'Nice movie'
  }
];


  exports.getAll = () => {
      return movies.slice();
  }

  exports.search = (title, genre, year) => {
     let result= movies.slice();
     if(title) {
      result = result.filter(movie => movie.title.toLocaleLowerCase().includes(title.toLowerCase()))
     }

     if(genre) {
      result = result.filter(movie => movie.genre.toLowerCase() === genre.toLowerCase());
     }

     if(year) {
      result = result.filter(movie => movie.year === year)
     }
     return result
  }

  exports.getOne = (movieId) => {
       const movie =  movies.find(movie => movie._id == movieId);
       return movie
  }

exports.create = (movieData) => {
  movieData._id =movies[movies.length -1]._id +1;
    movies.push(movieData);
}