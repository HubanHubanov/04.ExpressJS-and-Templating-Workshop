const movies = [{
    title: 'Jungle cruise',
    genre: 'adventure',
    director: 'Stallone',
    date: '2222',
    imageUrl: '/img/the-little-mermaid.jpg',
    rating: '8.1',
    description: 'Nice movie'
  }];

  exports.getAll = () => {
      return movies.slice();
  }

exports.create = (movieData) => {
    movies.push(movieData);
}