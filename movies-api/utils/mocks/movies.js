const moviesMock = [
  {
    id: '431a51e3-6252-42a9-92e0-87fd9a2c2ca5',
    title:
      'Strange Case of Dr. Jekyll and Miss Osbourne, The (Dr. Jekyll and His Women) (Docteur Jekyll et les femmes)',
    year: 2011,
    cover: 'http://dummyimage.com/165x218.jpg/ff4444/ffffff',
    description:
      'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    duration: 2011,
    contentRating: 'R',
    source: 'https://google.fr/varius/nulla/facilisi/cras/non/velit.xml',
    tags: [
      'Comedy|Drama|Romance',
      'Children|Drama|Mystery',
      'Children|Comedy|Drama|Fantasy',
    ],
  },
  {
    id: '3224b5d8-7714-4179-b710-0d7513e6956c',
    title: 'Bedazzled',
    year: 1992,
    cover: 'http://dummyimage.com/124x245.png/cc0000/ffffff',
    description:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    duration: 1943,
    contentRating: 'PG',
    source: 'http://wisc.edu/nisi/at.json',
    tags: ['Drama'],
  },
  {
    id: '67364e82-1ca1-45f6-a9b8-fc1800ea5dd4',
    title: 'Evil Aliens',
    year: 2011,
    cover: 'http://dummyimage.com/139x186.bmp/dddddd/000000',
    description:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    duration: 2030,
    contentRating: 'PG',
    source: 'http://wikimedia.org/eget/elit/sodales/scelerisque/mauris.aspx',
    tags: [
      'Comedy|Drama',
      'Crime|Drama|Film-Noir',
      'Children|Comedy|Romance',
      'Drama',
    ],
  },
  {
    id: 'e9502561-3d9f-4db9-b154-79290eac0886',
    title: "Smilla's Sense of Snow",
    year: 1997,
    cover: 'http://dummyimage.com/132x100.jpg/5fa2dd/ffffff',
    description:
      'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    duration: 2063,
    contentRating: 'PG-13',
    source: 'http://sciencedirect.com/fusce.html',
    tags: [
      'Action|Adventure|Drama|Western',
      'Crime|Drama|Thriller',
      'Adventure|Comedy',
    ],
  },
  {
    id: '77a383d1-4d8e-4c8e-9697-c787f9e3b1b8',
    title: 'Yeti: The Giant of the 20th Century',
    year: 2009,
    cover: 'http://dummyimage.com/115x185.jpg/dddddd/000000',
    description:
      'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    duration: 1943,
    contentRating: 'PG',
    source: 'https://delicious.com/vulputate.json',
    tags: ['Action|Sci-Fi|Thriller'],
  },
  {
    id: '619f62b7-f57b-4c4b-9fcd-ee010f644006',
    title: "Marilyn Hotchkiss' Ballroom Dancing & Charm School",
    year: 1998,
    cover: 'http://dummyimage.com/177x182.bmp/dddddd/000000',
    description:
      'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    duration: 1931,
    contentRating: 'NC-17',
    source: 'https://nifty.com/sit/amet/eleifend/pede/libero.js',
    tags: ['Drama', 'Comedy'],
  },
  {
    id: '0e9830fe-1c7c-4bcc-9e73-94259ef3eeef',
    title: 'Solo Sunny',
    year: 1998,
    cover: 'http://dummyimage.com/161x142.png/dddddd/000000',
    description:
      'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    duration: 2024,
    contentRating: 'PG-13',
    source: 'https://privacy.gov.au/felis/fusce/posuere/felis.js',
    tags: ['Comedy|Drama'],
  },
  {
    id: '914ee3c3-33e0-4583-8e25-3dc27701ab18',
    title: 'Clay Pigeons',
    year: 1950,
    cover: 'http://dummyimage.com/202x106.jpg/5fa2dd/ffffff',
    description:
      'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    duration: 1893,
    contentRating: 'NC-17',
    source: 'http://pen.io/consequat/morbi/a/ipsum/integer/a/nibh.png',
    tags: ['Action|Mystery|Sci-Fi', 'Documentary', 'Documentary|Drama'],
  },
  {
    id: '061342f5-40db-4d8b-8cc8-e9a2db7183a7',
    title: 'Caddyshack II',
    year: 2000,
    cover: 'http://dummyimage.com/166x219.bmp/cc0000/ffffff',
    description:
      'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    duration: 1916,
    contentRating: 'PG',
    source: 'https://pinterest.com/erat/nulla.js',
    tags: ['Horror|Sci-Fi', 'Comedy', 'Drama|War', 'Thriller', 'Horror'],
  },
  {
    id: 'a0c3eece-e9b5-4b10-b0d4-f6cff658be93',
    title: 'Kummeli Goldrush (Kummeli kultakuume)',
    year: 2005,
    cover: 'http://dummyimage.com/184x105.bmp/ff4444/ffffff',
    description:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    duration: 1937,
    contentRating: 'PG',
    source: 'http://dell.com/ligula/pellentesque.json',
    tags: [
      'Crime|Drama|Thriller',
      'Fantasy|Mystery|Thriller',
      'Drama|Romance|War',
    ],
  },
];

function filteredMoviesMocks(tag) {
  return moviesMock.filter((movie) => movie.tags.includes(tag));
}

class MoviesServiceMock {
  async getMovies() {
    return Promise.resolve(moviesMock);
  }

  async createMovie() {
    return Promise.resolve(moviesMock[0]);
  }
}

module.exports = {
  moviesMock,
  filteredMoviesMocks,
  MoviesServiceMock,
};
