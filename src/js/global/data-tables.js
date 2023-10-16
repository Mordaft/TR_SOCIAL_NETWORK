// Import Dexie.js library
import Dexie from 'dexie';

let db = new Dexie('socialNetworkDB');
db.version(1).stores({
    users: '++id, name, &email',
    groups: '++id, &name',
    posts: '++id, &userId, timestamp',
    badges: '++id, &title',
    events: '++id, &title',
});
// Open the database
db.open();

// Define the database
const dataTables = {
    // Define functions to query list and individual elements for each table
    users : {
        getAll: () => db.users.toArray(),
        getById: (id) => db.users.get(id),
        put: (user) => db.users.put(user),
        putAll: (users) => db.users.bulkPut(users)
    },

    groups : {
        getAll: () => db.groups.toArray(),
        getById: (id) => db.groups.get(id),
        put: (group) => db.groups.put(group),
        putAll: (groups) => db.groups.bulkPut(groups)
    },

    posts : {
        getAll: () => db.posts.toArray(),
        getById: (id) => db.posts.get(id),
        put: (post) => db.posts.put(post),
        putAll: (posts) => db.posts.bulkPut(posts)
    },

    badges : {
        getAll: () => db.badges.toArray(),
        getById: (id) => db.badges.get(id),
        put: (badge) => db.badges.put(badge),
        putAll: (badges) => db.badges.bulkPut(badges)
    },
    events : {
        getAll: () => db.events.toArray(),
        getById: (id) => db.events.get(id),
        put: (event) => db.events.put(event),
        putAll: (events) => db.events.bulkPut(events)
    }

}

module.exports = dataTables;

