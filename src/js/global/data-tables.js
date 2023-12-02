// Import Dexie.js library
import Dexie from 'dexie';
// Import Dexie Cloud library
import dexieCloud from "dexie-cloud-addon";

const PARTNERSHIP = 'partnership';
const FRIENDSHIP = 'friendship';

let db = new Dexie('socialNetworkDB', {addons: [dexieCloud]});
db.version(1).stores({
    partners: 'name, &full_name',
    groups: '&name',
    posts: '&[author+created], author, timestamp',
    badges: '&title, position',
    events: '&title, position',
    quests: '&title, relevant',
    requests: '&[type+from+to+timestamp], type, timestamp',         //resquest for friendship & request to join a group (partnership)
    messages: '&[conversationWith+from+messageTime], conversationWith', //conversation with a partner
});


// Connect your dexie-cloud database:
db.cloud.configure({
    databaseUrl: "https://zww3rotfy.dexie.cloud",
    requireAuth: false,
    disableWebSocket: true,
    disableEagerSync: true,
    periodicSync:{
        minInterval: 60*1000 // 1 minute
    } 
});


// Open the database
db.open();

// Define the database
const dataTables = {
    getBD: () => db ,
    // Define functions to query list and individual elements for each table
    partners: {
        getAll: () => db.partners.toArray(),
        getByFullname: (fullName) => db.partners.where('full_name').equals(fullName).first(),
        getByName: (name) => db.partners.where('name').equals(name).first(),
        put: (partner) => db.partners.put(partner),
        putAll: (partners) => db.partners.bulkPut(partners)
    },

    groups: {
        getAll: () => db.groups.toArray(),
        getByName: (name) => db.groups.where('name').equals(name).first(),
        put: (group) => db.groups.put(group),
        putAll: (groups) => db.groups.bulkPut(groups)
    },

    posts: {
        getAll: () => db.posts.toCollection().sortBy("created"),
        getByAuthor: (author) => db.posts.where('author').equals(userId).first(),
        put: (post) => db.posts.put(post),
        putAll: (posts) => db.posts.bulkPut(posts)
    },

    badges: {
        getAll: () => db.badges.toCollection().sortBy("position"),
        getByTitle: (title) => db.badges.where('title').equals(title).first(),
        put: (badge) => db.badges.put(badge),
        putAll: (badges) => db.badges.bulkPut(badges)
    },

    events: {
        getAll: () => db.events.toCollection().sortBy("position"),
        getByTitle: (title) => db.events.where('title').equals(title).first(),
        put: (event) => db.events.put(event),
        putAll: (events) => db.events.bulkPut(events)
    },

    quests: {
        getAll: () => db.quests.toCollection().sortBy("position"),
        getRelevant: () => db.quests.where('relevant').equals(1).toArray(),
        getByTitle: (title) => db.quests.where('title').equals(title).first(),
        put: (quest) => db.quests.put(quest),
        putAll: (quests) => db.quests.bulkPut(quests)
    },

    requests: {
        getMembershipRequests: () => db.requests.where('type').equals(PARTNERSHIP).toArray(),
        getFriendshipRequests: () => db.requests.where('type').equals(FRIENDSHIP).toArray(),
        putMembershipRequests: (request) => db.requests.put(request),
        putFriendshipRequests: (request) => db.requests.put(request),
        putAllRequest: (requests) => db.events.bulkPut(requests)
    },
    messages: {
        getAll: () => db.messages.toArray(),
        getLast: () => {
            let list = [];
            let keys = db.messages.distinct('conversationWith');
            keys.array.forEach(key => {
                db.messages.where('conversationWith')
                    .equals(key)
                    .sortBy("messageTime")
                    .reverse()
                    .first().then(message => {
                        list.push(message);
                    });

            });
            return list;
        },
        getByConversationWith: (conversationWith) => db.messages.where('conversationWith').equals(conversationWith).toArray(),
        put: (message) => db.messages.put(message),
        putAll: (messages) => db.messages.bulkPut(messages)
    }


}

module.exports = dataTables;
export { FRIENDSHIP, PARTNERSHIP as MEMBERSHIP };
