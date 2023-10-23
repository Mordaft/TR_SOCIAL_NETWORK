// Import Dexie.js library
import Dexie from 'dexie';

let db = new Dexie('socialNetworkDB');
db.version(1).stores({
    members: 'name, &full_name',
    groups: '&name',
    posts: '&userId, timestamp',
    badges: '&title, position',
    events: '&title, position',
});
// Open the database
db.open();

// Define the database
const dataTables = {
    // Define functions to query list and individual elements for each table
    members : {
        getAll: () => db.members.toArray(),
        getByFullname: (fullName) => db.members.where('full_name').equals(fullName).first(),
        getByName: (name) => db.members.where('name').equals(name).first(),
        put: (member) => db.members.put(member),
        putAll: (members) => db.members.bulkPut(members)
    },

    groups : {
        getAll: () => db.groups.toArray(),
        getByName: (name) => db.groups.where('name').equals(name).first(),
        put: (group) => db.groups.put(group),
        putAll: (groups) => db.groups.bulkPut(groups)
    },

    posts : {
        getAll: () => db.posts.toArray(),
        getByUserId: (userId) => db.posts.where('userId').equals(userId).first(),
        put: (post) => db.posts.put(post),
        putAll: (posts) => db.posts.bulkPut(posts)
    },

    badges : {
        getAll: () => db.badges.toCollection().sortBy("position"),
        getByTitle:  (title) => db.badges.where('title').equals(title).first(),
        put: (badge) => db.badges.put(badge),
        putAll: (badges) => db.badges.bulkPut(badges)
    },
    
    events : {
        getAll: () => db.events.toCollection().sortBy("position"),
        getByTitle:  (title) => db.events.where('title').equals(title).first(),
        put: (event) => db.events.put(event),
        putAll: (events) => db.events.bulkPut(events)
    }

}

module.exports = dataTables;

