const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');

const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

async function startApollo() {
const server = new ApolloServer({
  typeDefs,
  resolvers,  
  context: authMiddleware, 
});

await server.start();

server.applyMiddleware({ app });
console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
}

startApollo();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
 app.use(express.static(path.join(__dirname, '../client/build')));}

app.get('*', (req, res) => {
res.sendFile(path.join(__dirname, '../client/build/index.html'))});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`🌍 Now listening on localhost:${PORT}!`);
  });
});
