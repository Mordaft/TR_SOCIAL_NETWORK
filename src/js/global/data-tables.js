// Import Dexie.js library
import Dexie from 'dexie';

// Define the database
const db = new Dexie('socialNetworkDB');

// Define the tables
db.version(1).stores({
        users: '++id, name, email, password',
        posts: '++id, userId, content, timestamp'
});

// Define functions to query list and individual elements for each table
const users = {
    getAll: () => db.users.toArray(),
    getById: (id) => db.users.get(id)
};

const posts = {
    getAll: () => db.posts.toArray(),
    getById: (id) => db.posts.get(id)
};

// Export the database and functions
export default {
    db,
    users,
    posts
};

