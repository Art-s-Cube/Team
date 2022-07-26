const { ApolloServer, gql } = require('apollo-server');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    title: String
    author: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book]
  }
`;
const books = [
    {
        "name": "3500",
        "average": 62866.57,
        "median": 63460.0,
        "stdDev": 15296.99,
        "pVariance": 227840220.66
    },
    {
        "name": "Blazer",
        "average": 41854.8,
        "median": 42180.0,
        "stdDev": 4056.61,
        "pVariance": 15985916.04
    },
    {
        "name": "Bolt EUV",
        "average": 39032.27,
        "median": 37695.0,
        "stdDev": 4233.18,
        "pVariance": 16290806.19
    },
    {
        "name": "Bolt EV",
        "average": 28585.0,
        "median": 28035.0,
        "stdDev": 5097.3,
        "pVariance": 17321666.66
    },
    {
        "name": "Camaro",
        "average": 40441.22,
        "median": 40194.0,
        "stdDev": 11603.28,
        "pVariance": 131644397.86
    },
    {
        "name": "Colorado",
        "average": 37978.64,
        "median": 37222.5,
        "stdDev": 6002.4,
        "pVariance": 35514187.05
    },
    {
        "name": "Corvette",
        "average": 92645.0,
        "median": 89960.0,
        "stdDev": 16616.55,
        "pVariance": 251008886.36
    },
    {
        "name": "Equinox",
        "average": 31813.51,
        "median": 30839.0,
        "stdDev": 3119.91,
        "pVariance": 9674903.58
    },
    {
        "name": "Express",
        "average": 37737.42,
        "median": 37000.0,
        "stdDev": 3757.03,
        "pVariance": 13743824.45
    },
    {
        "name": "Malibu",
        "average": 26999.8,
        "median": 26377.0,
        "stdDev": 2102.13,
        "pVariance": 4124377.89
    },
    {
        "name": "Silverado",
        "average": 58647.32,
        "median": 57613.0,
        "stdDev": 11414.27,
        "pVariance": 129996169.62
    },
    {
        "name": "Spark",
        "average": 17524.5,
        "median": 17524.5,
        "stdDev": 99.7,
        "pVariance": 4970.25
    },
    {
        name": "Suburban",
        average": 72953.89,
        "median": 72410.0,
        "stdDev": 4956.52,
        "pVariance": 24230563.27
    },
    {
        name: "Tahoe",
        average: 70331.0,
        median: 69090.0,
        stdDev: 5794.51,
        pVariance: 33325863.35
    },
    {
        name: "TrailBlazer",
        average: 28030.86,
        median: 28000.0,
        stdDev: 3273.59,
        pVariance: 10250488.37
    },
    {
        name: "Traverse",
        average: 43232.46,
        median: 42720.0,
        stdDev: 5864.23,
        pVariance: 34019515.32
    },
    {
        name: "Trax",
        average: 23689.92,
        median: 23650.0,
        stdDev: 1253.47,
        pVariance: 1510764.37
    },
  ];
  // Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
    Query: {
      books: () => books,
    },
  };
  // The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: 'bounded',
  });
  
  // The `listen` method launches a web server.
  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });