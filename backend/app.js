const express = require('express');
const url = require('url');
const querystring = require('querystring');
const faker = require('faker');
const morgan = require('morgan');
const sub = require('date-fns/sub');
const bodyParser = require("body-parser");
const changeCase = require('change-case');
const http = require('http');
const {
    ReasonPhrases,
    StatusCodes,
    getReasonPhrase,
    getStatusCode,
} = require('http-status-codes');


const lodash = require('lodash');

const app = express();


//Middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(morgan('tiny'));

require('dotenv/config');
const config = require("nodemon");

const app_url = process.env.APP_URL;
const app_port = process.env.APP_PORT;
const app_prefix = process.env.APP_PREFIX;

const CONTACT_NAMES = [

    faker.name.suffix() + ' ' + faker.name.firstName() + ' ' + faker.name.middleName() + ' ' + faker.name.lastName(),
    faker.name.suffix() + ' ' + faker.name.firstName() + ' ' + faker.name.middleName() + ' ' + faker.name.lastName(),
    faker.name.suffix() + ' ' + faker.name.firstName() + ' ' + faker.name.middleName() + ' ' + faker.name.lastName(),
    faker.name.suffix() + ' ' + faker.name.firstName() + ' ' + faker.name.middleName() + ' ' + faker.name.lastName(),
    faker.name.suffix() + ' ' + faker.name.firstName() + ' ' + faker.name.middleName() + ' ' + faker.name.lastName(),
    faker.name.suffix() + ' ' + faker.name.firstName() + ' ' + faker.name.middleName() + ' ' + faker.name.lastName(),
    faker.name.suffix() + ' ' + faker.name.firstName() + ' ' + faker.name.middleName() + ' ' + faker.name.lastName(),
    faker.name.suffix() + ' ' + faker.name.firstName() + ' ' + faker.name.middleName() + ' ' + faker.name.lastName(),
    faker.name.suffix() + ' ' + faker.name.firstName() + ' ' + faker.name.middleName() + ' ' + faker.name.lastName(),
    faker.name.suffix() + ' ' + faker.name.firstName() + ' ' + faker.name.middleName() + ' ' + faker.name.lastName(),
    faker.name.suffix() + ' ' + faker.name.firstName() + ' ' + faker.name.middleName() + ' ' + faker.name.lastName(),
    faker.name.suffix() + ' ' + faker.name.firstName() + ' ' + faker.name.middleName() + ' ' + faker.name.lastName(),
    faker.name.suffix() + ' ' + faker.name.firstName() + ' ' + faker.name.middleName() + ' ' + faker.name.lastName(),
    faker.name.suffix() + ' ' + faker.name.firstName() + ' ' + faker.name.middleName() + ' ' + faker.name.lastName(),
    faker.name.suffix() + ' ' + faker.name.firstName() + ' ' + faker.name.middleName() + ' ' + faker.name.lastName(),
    faker.name.suffix() + ' ' + faker.name.firstName() + ' ' + faker.name.middleName() + ' ' + faker.name.lastName(),
    faker.name.suffix() + ' ' + faker.name.firstName() + ' ' + faker.name.middleName() + ' ' + faker.name.lastName(),
    faker.name.suffix() + ' ' + faker.name.firstName() + ' ' + faker.name.middleName() + ' ' + faker.name.lastName(),
    faker.name.suffix() + ' ' + faker.name.firstName() + ' ' + faker.name.middleName() + ' ' + faker.name.lastName(),
    faker.name.suffix() + ' ' + faker.name.firstName() + ' ' + faker.name.middleName() + ' ' + faker.name.lastName(),
    faker.name.suffix() + ' ' + faker.name.firstName() + ' ' + faker.name.middleName() + ' ' + faker.name.lastName(),
    faker.name.suffix() + ' ' + faker.name.firstName() + ' ' + faker.name.middleName() + ' ' + faker.name.lastName(),
    faker.name.suffix() + ' ' + faker.name.firstName() + ' ' + faker.name.middleName() + ' ' + faker.name.lastName(),
    faker.name.suffix() + ' ' + faker.name.firstName() + ' ' + faker.name.middleName() + ' ' + faker.name.lastName(),
    'T.O Auma Bro'

];
const MY_CONTACT = {
    id: '8864c717-587d-472a-929a-8e5f298024da-0',
    avatar: faker.image.avatar(),
    name: faker.name.firstName() + ' ' + faker.name.middleName() + ' ' + faker.name.lastName(),
    username: faker.internet.userName(),
};
const STATUS = ['online', 'offline', 'away', 'busy'];
const POSITION = [
    'Leader',
    'Hr Manager',
    'UI Designer',
    'UX Designer',
    'UI/UX Designer',
    'Project Manager',
    'Backend Developer',
    'Full Stack Designer',
    'Front End Developer',
    'Full Stack Developer'
];
const CONTACTS = [...Array(20)].map((_, index) => {
    const setIndex = index + 1;
    return {
        id: setIndex,
        name: CONTACT_NAMES[setIndex],
        username: CONTACT_NAMES[setIndex] && changeCase.dotCase(CONTACT_NAMES[setIndex]),
        avatar: faker.image.avatar(),
        address: faker.address.streetAddress(),
        phone: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        lastActivity: faker.time.recent(),
        status: lodash.sample(STATUS) || lodash.first(POSITION),
        position:
            lodash.sample(POSITION) || lodash.first(POSITION)
    };
});
const CONVERSATIONS = [
    {
        id: 1,
        participants: [MY_CONTACT, CONTACTS[1]],
        type: 'ONE_TO_ONE',
        unreadCount: 0,
        messages: [
            {
                id: faker.datatype.uuid(),
                body: faker.lorem.sentence(),
                contentType: 'text',
                attachments: [faker.image.fashion(),],
                createdAt: sub(new Date(), {hours: 10}),
                senderId: CONTACTS[1].id
            },
            {
                id: faker.datatype.uuid(),
                body: faker.lorem.sentence(),
                contentType: 'text',
                attachments: [faker.image.fashion()],
                createdAt: sub(new Date(), {hours: 2}),
                senderId: MY_CONTACT.id
            },
            {
                id: faker.datatype.uuid(),
                body: faker.lorem.sentence(),
                contentType: 'text',
                attachments: faker.image.fashion(),
                createdAt: sub(new Date(), {minutes: 8}),
                senderId: CONTACTS[1].id
            },
            {
                id: faker.datatype.uuid(),
                body: faker.lorem.sentence(),
                contentType: 'text',
                attachments: [
                    'https://mail.google.com/mail/u/file1.docx',
                    'https://mail.google.com/mail/u/file2.xlsx',
                    'https://mail.google.com/mail/u/file3.pptx'
                ],
                createdAt: sub(new Date(), {minutes: 6}),
                senderId: MY_CONTACT.id
            },
            {
                id: faker.datatype.uuid(),
                body: faker.lorem.sentence(),
                contentType: 'text',
                attachments: [
                    'https://mail.google.com/mail/u/file4.pdf',
                    'https://mail.google.com/mail/u/file5.psd',
                    'https://mail.google.com/mail/u/file6.esp',
                    'https://mail.google.com/mail/u/file7.sketch'
                ],
                createdAt: sub(new Date(), {minutes: 4}),
                senderId: CONTACTS[1].id
            },
            {
                id: faker.datatype.uuid(),
                attachments: [],
                contentType: 'image',
                body: faker.image.imageUrl(),
                createdAt: sub(new Date(), {minutes: 2}),
                senderId: CONTACTS[1].id
            },
            {
                id: faker.datatype.uuid(),
                contentType: 'text',
                body: faker.lorem.sentence(),
                attachments: [],
                createdAt: sub(new Date(), {minutes: 2}),
                senderId: MY_CONTACT.id
            },
            {
                id: faker.datatype.uuid(),
                body: faker.lorem.sentence(),
                contentType: 'text',
                attachments: [],
                createdAt: sub(new Date(), {minutes: 2}),
                senderId: MY_CONTACT.id
            }
        ]
    },
    {
        id: 2,
        participants: [MY_CONTACT, CONTACTS[2]],
        type: 'ONE_TO_ONE',
        unreadCount: 2,
        messages: [
            {
                id: faker.datatype.uuid(),
                body: faker.lorem.sentence(),
                contentType: 'text',
                attachments: [],
                createdAt: sub(new Date(), {hours: 8}),
                senderId: CONTACTS[2].id
            },
            {
                id: faker.datatype.uuid(),
                body: faker.lorem.sentence(),
                contentType: 'text',
                attachments: [],
                createdAt: sub(new Date(), {hours: 6}),
                senderId: MY_CONTACT.id
            },
            {
                id: faker.datatype.uuid(),
                body: faker.lorem.sentence(),
                contentType: 'text',
                attachments: [],
                createdAt: sub(new Date(), {hours: 4, minutes: 30}),
                senderId: CONTACTS[2].id
            },
            {
                id: faker.datatype.uuid(),
                body: faker.lorem.sentence(),
                contentType: 'text',
                attachments: [],
                createdAt: sub(new Date(), {hours: 2, minutes: 15}),
                senderId: MY_CONTACT.id
            },
            {
                id: faker.datatype.uuid(),
                body: faker.lorem.sentence(),
                contentType: 'text',
                attachments: [],
                createdAt: sub(new Date(), {hours: 1, minutes: 15}),
                senderId: CONTACTS[2].id
            },
            {
                id: faker.datatype.uuid(),
                body: faker.lorem.sentence(),
                attachments: [],
                contentType: 'image',
                createdAt: sub(new Date(), {hours: 1}),
                senderId: CONTACTS[2].id
            },
            {
                id: faker.datatype.uuid(),
                body: faker.lorem.sentence(),
                contentType: 'text',
                attachments: [],
                createdAt: sub(new Date(), {minutes: 45}),
                senderId: MY_CONTACT.id
            }
        ]
    },
    {
        id: 3,
        participants: [MY_CONTACT, CONTACTS[3]],
        type: 'ONE_TO_ONE',
        unreadCount: 0,
        messages: [
            {
                id: faker.datatype.uuid(),
                body: faker.lorem.sentence(),
                contentType: 'text',
                attachments: [],
                createdAt: sub(new Date(), {hours: 8}),
                senderId: CONTACTS[3].id
            },
            {
                id: faker.datatype.uuid(),
                body: faker.lorem.sentence(),
                contentType: 'text',
                attachments: [],
                createdAt: sub(new Date(), {hours: 6}),
                senderId: MY_CONTACT.id
            },
            {
                id: faker.datatype.uuid(),
                body: faker.lorem.sentence(),
                contentType: 'text',
                attachments: [],
                createdAt: sub(new Date(), {hours: 4, minutes: 30}),
                senderId: CONTACTS[3].id
            },
            {
                id: faker.datatype.uuid(),
                body: faker.lorem.sentence(),
                contentType: 'text',
                attachments: [],
                createdAt: sub(new Date(), {hours: 2, minutes: 15}),
                senderId: MY_CONTACT.id
            },
            {
                id: faker.datatype.uuid(),
                body: faker.lorem.sentence(),
                contentType: 'text',
                attachments: [],
                createdAt: sub(new Date(), {hours: 1, minutes: 15}),
                senderId: CONTACTS[3].id
            },
            {
                id: faker.datatype.uuid(),
                body: faker.image.imageUrl(),
                contentType: 'image',
                attachments: [],
                createdAt: sub(new Date(), {hours: 1}),
                senderId: CONTACTS[3].id
            },
            {
                id: faker.datatype.uuid(),
                body: faker.lorem.sentence,
                contentType: 'image',
                attachments: [],
                createdAt: sub(new Date(), {hours: 1}),
                senderId: CONTACTS[3].id
            }
        ]
    },
    {
        id: 4,
        participants: [MY_CONTACT, CONTACTS[4]],
        type: 'ONE_TO_ONE',
        unreadCount: 2,
        messages: [
            {
                id: faker.datatype.uuid(),
                body: faker.lorem.sentence(),
                contentType: 'text',
                attachments: [],
                createdAt: sub(new Date(), {hours: 10}),
                senderId: CONTACTS[4].id
            },
            {
                id: faker.datatype.uuid(),
                body: faker.lorem.sentence(),
                contentType: 'text',
                attachments: [],
                createdAt: sub(new Date(), {hours: 2}),
                senderId: MY_CONTACT.id
            },
            {
                id: faker.datatype.uuid(),
                body: faker.lorem.sentence(),
                contentType: 'text',
                attachments: [],
                createdAt: sub(new Date(), {minutes: 5}),
                senderId: CONTACTS[4].id
            },
            {
                id: faker.datatype.uuid(),
                body: faker.lorem.sentence(),
                contentType: 'text',
                attachments: [],
                createdAt: sub(new Date(), {minutes: 3}),
                senderId: MY_CONTACT.id
            },
            {
                id: faker.datatype.uuid(),
                body: faker.lorem.sentence(),
                contentType: 'text',
                attachments: [],
                createdAt: sub(new Date(), {minutes: 1}),
                senderId: MY_CONTACT.id
            },
            {
                id: faker.datatype.uuid(),
                body: faker.lorem.sentence(),
                contentType: 'text',
                attachments: [],
                createdAt: sub(new Date(), {minutes: 1}),
                senderId: CONTACTS[4].id
            }
        ]
    },
    {
        id: 5,
        participants: [MY_CONTACT, CONTACTS[5]],
        type: 'ONE_TO_ONE',
        unreadCount: 0,
        messages: [
            {
                id: faker.datatype.uuid(),
                body: faker.lorem.sentence(),
                contentType: 'text',
                attachments: [],
                createdAt: sub(new Date(), {minutes: 1}),
                senderId: MY_CONTACT.id
            },
            {
                id: faker.datatype.uuid(),
                body: faker.lorem.sentence(),
                contentType: 'text',
                attachments: [],
                createdAt: sub(new Date(), {minutes: 1}),
                senderId: CONTACTS[5].id
            }
        ]
    },
    {
        id: 6,
        participants: [MY_CONTACT, CONTACTS[6]],
        type: 'ONE_TO_ONE',
        unreadCount: 2,
        messages: [
            {
                id: faker.datatype.uuid(),
                body: faker.lorem.sentence(),
                contentType: 'text',
                attachments: [],
                createdAt: sub(new Date(), {minutes: 1}),
                senderId: MY_CONTACT.id
            },
            {
                id: faker.datatype.uuid(),
                body: faker.lorem.sentence(),
                contentType: 'text',
                attachments: [],
                createdAt: sub(new Date(), {minutes: 1}),
                senderId: CONTACTS[6].id
            }
        ]
    },
    {
        id: 7,
        participants: [MY_CONTACT, CONTACTS[1], CONTACTS[2], CONTACTS[4], CONTACTS[3]],
        type: 'GROUP',
        unreadCount: 5,
        messages: [
            {
                id: faker.datatype.uuid(),
                body: faker.lorem.sentence(),
                contentType: 'text',
                attachments: [
                    faker.image.imageUrl(),
                    faker.image.imageUrl(),
                    faker.image.imageUrl(),
                    faker.image.imageUrl(),
                    'https://mail.google.com/mail/u/file1.docx'
                ],
                createdAt: sub(new Date(), {days: 3, hours: 2, minutes: 30}),
                senderId: MY_CONTACT.id
            },
            {
                id: faker.datatype.uuid(),
                body: faker.lorem.sentence(),
                contentType: 'text',
                attachments: ['https://mail.google.com/mail/u/file2.xlsx'],
                createdAt: sub(new Date(), {days: 3, hours: 2, minutes: 29}),
                senderId: CONTACTS[1].id
            },
            {
                id: faker.datatype.uuid(),
                body: faker.lorem.sentence(),
                contentType: 'text',
                attachments: ['https://mail.google.com/mail/u/file3.psd'],
                createdAt: sub(new Date(), {days: 3, hours: 2, minutes: 28}),
                senderId: CONTACTS[2].id
            },
            {
                id: faker.datatype.uuid(),
                body: faker.lorem.sentence(),
                contentType: 'text',
                attachments: ['https://mail.google.com/mail/u/file3.pptx'],
                createdAt: sub(new Date(), {days: 3, hours: 2, minutes: 27}),
                senderId: CONTACTS[4].id
            },
            {
                id: faker.datatype.uuid(),
                body: faker.lorem.sentence(),
                contentType: 'text',
                attachments: ['https://mail.google.com/mail/u/file3.ai'],
                createdAt: sub(new Date(), {days: 3, hours: 2, minutes: 26}),
                senderId: MY_CONTACT.id
            },
            {
                id: faker.datatype.uuid(),
                body: faker.lorem.sentence(),
                contentType: 'text',
                attachments: ['https://mail.google.com/mail/u/file3.mp4'],
                createdAt: sub(new Date(), {days: 3}),
                senderId: CONTACTS[3].id
            }
        ]
    },
    {
        id: 8,
        participants: [MY_CONTACT, CONTACTS[7]],
        type: 'ONE_TO_ONE',
        unreadCount: 0,
        messages: [
            {
                id: faker.datatype.uuid(),
                body: faker.lorem.sentence(),
                contentType: 'text',
                attachments: [],
                createdAt: sub(new Date(), {minutes: 1}),
                senderId: MY_CONTACT.id
            },
            {
                id: faker.datatype.uuid(),
                body: faker.lorem.sentence(),
                contentType: 'text',
                attachments: [],
                createdAt: sub(new Date(), {minutes: 1}),
                senderId: CONTACTS[7].id
            }
        ]
    },
    {
        id: 9,
        participants: [MY_CONTACT, CONTACTS[8]],
        type: 'ONE_TO_ONE',
        unreadCount: 0,
        messages: [
            {
                id: faker.datatype.uuid(),
                body: faker.lorem.sentence(),
                contentType: 'text',
                attachments: [],
                createdAt: sub(new Date(), {minutes: 1}),
                senderId: MY_CONTACT.id
            },
            {
                id: faker.datatype.uuid(),
                body: faker.lorem.sentence(),
                contentType: 'text',
                attachments: [],
                createdAt: sub(new Date(), {minutes: 1}),
                senderId: CONTACTS[8].id
            }
        ]
    },
    {
        id: 10,
        participants: [MY_CONTACT, CONTACTS[9]],
        type: 'ONE_TO_ONE',
        unreadCount: 0,
        messages: [
            {
                id: faker.datatype.uuid(),
                body: faker.lorem.sentence(),
                contentType: 'text',
                attachments: [],
                createdAt: sub(new Date(), {minutes: 1}),
                senderId: MY_CONTACT.id
            },
            {
                id: faker.datatype.uuid(),
                body: faker.lorem.sentence(),
                contentType: 'text',
                attachments: [],
                createdAt: sub(new Date(), {minutes: 1}),
                senderId: CONTACTS[9].id
            }
        ]
    },
    {
        id: 11,
        participants: [MY_CONTACT, CONTACTS[6], CONTACTS[7], CONTACTS[8], CONTACTS[9], CONTACTS[10]],
        type: 'GROUP',
        unreadCount: 0,
        messages: [
            {
                id: faker.datatype.uuid(),
                body: faker.lorem.sentence(),
                contentType: 'text',
                attachments: [],
                createdAt: sub(new Date(), {days: 3, hours: 2, minutes: 30}),
                senderId: MY_CONTACT.id
            },
            {
                id: faker.datatype.uuid(),
                body: faker.lorem.sentence(),
                contentType: 'text',
                attachments: [],
                createdAt: sub(new Date(), {days: 3, hours: 2, minutes: 29}),
                senderId: CONTACTS[9].id
            },
            {
                id: faker.datatype.uuid(),
                body: faker.lorem.sentence(),
                contentType: 'text',
                attachments: [],
                createdAt: sub(new Date(), {days: 3, hours: 2, minutes: 28}),
                senderId: CONTACTS[10].id
            },
            {
                id: faker.datatype.uuid(),
                body: faker.lorem.sentence(),
                contentType: 'text',
                attachments: [],
                createdAt: sub(new Date(), {days: 3, hours: 2, minutes: 27}),
                senderId: CONTACTS[8].id
            },
            {
                id: faker.datatype.uuid(),
                attachments: [],
                body: faker.lorem.sentence(),
                contentType: 'text',
                createdAt: sub(new Date(), {days: 3, hours: 2, minutes: 26}),
                senderId: MY_CONTACT.id
            },
            {
                id: faker.datatype.uuid(),
                body: faker.lorem.sentence(),
                contentType: 'text',
                attachments: [],
                createdAt: sub(new Date(), {days: 3}),
                senderId: CONTACTS[6].id
            },
            {
                id: faker.datatype.uuid(),
                body: faker.lorem.sentence(),
                contentType: 'text',
                attachments: [],
                createdAt: sub(new Date(), {days: 3}),
                senderId: CONTACTS[7].id
            }
        ]
    },
    {
        id: 12,
        participants: [MY_CONTACT, CONTACTS[10]],
        type: 'ONE_TO_ONE',
        unreadCount: 0,
        messages: [
            {
                id: faker.datatype.uuid(),
                body: faker.lorem.sentence(),
                contentType: 'text',
                attachments: [],
                createdAt: sub(new Date(), {minutes: 1}),
                senderId: MY_CONTACT.id
            },
            {
                id: faker.datatype.uuid(),
                body: faker.lorem.sentence(),
                contentType: 'text',
                attachments: [],
                createdAt: sub(new Date(), {minutes: 1}),
                senderId: CONTACTS[10].id
            }
        ]
    }
];


const findContactByUsername = (username) => {
    const contact = CONTACTS.find((_contact) => _contact.username === username);
    return contact || null;
};
const findConversationById = (conversationId) => {
    const conversation = CONVERSATIONS.find((_conversation) => _conversation.id === conversationId);
    return conversation || null;
};
const findConversationByOtherParticipantId = (participantId) => {
    const conversation = CONVERSATIONS.find((_conversation) => {
        if (_conversation.type !== 'ONE_TO_ONE') {
            return false;
        }
        const participant = _conversation.participants.find(
            (_participant) => _participant.id === participantId
        );
        return !!participant;
    });
    return conversation || null;
};


// const findConversationByParticipantIds = (participantIds) => {
//     const conversation = CONVERSATIONS.find((_conversation) => {
//         if (_conversation.participants.length < participantIds.length) {
//             return false;
//         }
//         const _participantIds
//         [] = [];
//
//         _conversation.participants.forEach((_participant) => {
//             _participantIds.push(_participant.id);
//         });
//
//         return lodash.isEmpty(lodash.xor(participantIds, _participantIds));
//     });
//     return conversation || null;
// };


app.get('/', async function (req, res) {

    // Access the provided 'page' and 'limt' query parameters
    let page = req.query.page;
    let limit = req.query.limit;

    let articles = await Article.findAll().paginate({page: page, limit: limit}).exec();

    // Return the articles to the rendering engine
    res.render('index', {
        articles: articles
    });
});

app.get(`${app_prefix}/chat/contacts`, async function (req, res) {
    try {
        res.status(StatusCodes.OK)
        res.json(CONTACTS)

    } catch (error) {
        console.error(error);
    }
});

// app.get(`${app_prefix}/chat/conversations`, async function (req, res) {
//     try {
//         res.status(StatusCodes.OK);
//         res.json(CONVERSATIONS);
//
//     } catch (error) {
//         console.error(error);
//     }
// });


app.get(`${app_prefix}/chat/conversations`, async function (req, res) {
    try {
        var conversationKey = req.query.conversationKey;
        let conversation = findConversationById(conversationKey);
        res.json(conversation);

        if (conversation) {
            res.status(StatusCodes.OK);
            res.json(conversation);
        }

        const contact = findContactByUsername(conversationKey);

        if (!contact) {

            res.status(StatusCodes.NOT_FOUND);
            res.json([{message: getReasonPhrase.NOT_FOUND}]);
        }
        conversation = findConversationByOtherParticipantId(contact.id);

        res.status(StatusCodes.OK);
        res.json(CONVERSATIONS);
    } catch (error) {
        console.error(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR);
        res.json([{message: getReasonPhrase.INTERNAL_SERVER_ERROR}]);

    }
})
;

app.get(`${app_prefix}/chat/search`, async function (req, res) {
    try {

        const filters = req.query;

        const filteredUsers = CONTACTS.filter(CONTACTS => {
            let isValid = true;
            for (let key in filters) {
                console.log(key, CONTACTS[key], filters[key]);
                isValid = isValid && CONTACTS[key] === filters[key];
            }
            return isValid;
        });

        res.status(StatusCodes.OK);
        res.json(filteredUsers);
    } catch (error) {
        console.error(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR);
        res.json({message: ReasonPhrases.INTERNAL_SERVER_ERROR});
    }
});
app.get(`${app_prefix}/chat/participants`, async function (req, res) {
    try {

        var conversationKey = req.query.conversationKey;
        const participants = [];
        const conversation = findConversationById(conversationKey);
        if (conversation) {
            participants.push(...conversation.participants);
        } else {
            const contact = findContactByUsername(conversationKey);
            if (contact) {
                participants.push({
                    id: contact.id,
                    avatar: contact.avatar,
                    name: contact.name,
                    username: contact.username,
                    address: contact.address,
                    phone: contact.phone,
                    email: contact.email,
                    position: contact.position,
                    status: contact.status,
                    lastActivity: contact.lastActivity
                });
            }
        }

        res.status(StatusCodes.OK);
        res.json(participants);
    } catch (error) {
        console.error(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR);
        res.json(error);
    }
});

app.get(`${app_prefix}/chat/conversation/mark-as-seen`, async function (req, res) {

    try {
        const conversationId = config.params;
        const conversation = CONVERSATIONS.find((_conversation) => _conversation.id === conversationId);
        if (conversation) {
            conversation.unreadCount = 0;
        }
        res.status(StatusCodes.OK);

        res.json(
            {'true': true, conversation}
        );
    } catch (error) {
        console.error(error);
        return [500, {message: 'Internal server error'}];
    }
});

// ----------------------------------------------------------------------

// mock.onGet('/api/chat/conversation').reply((config) => {
//     try {
//         const {conversationKey} = config.params;
//         let conversation = findConversationById(conversationKey);
//
//         if (conversation) {
//             return [200, {conversation}];
//         }
//
//         const contact = findContactByUsername(conversationKey);
//
//         if (!contact) {
//             return [404, {message: 'Unable to find the contact'}];
//         }
//         conversation = findConversationByOtherParticipantId(contact.id);
//
//         return [200, {conversation}];
//     } catch (error) {
//         console.error(error);
//         return [500, {message: 'Internal server error'}];
//     }
// });

// ----------------------------------------------------------------------


// ----------------------------------------------------------------------

// mock.onPost('/api/chat/messages/new').reply((request) => {
//     try {
//         const {
//             conversationId,
//             recipientIds,
//             body
//         } = JSON.parse(request.data);
//
//         const user = MY_CONTACT;
//         let conversation = null;
//
//         if (conversationId) {
//             conversation = findConversationById(conversationId);
//             if (!conversation) {
//                 return [400, {message: 'Invalid conversation id'}];
//             }
//         }
//
//         if (recipientIds) {
//             const participantIds = [...recipientIds, user.id];
//             conversation = findConversationByParticipantIds(participantIds);
//         }
//
//         const message = {
//             id: faker.datatype.uuid(),
//             attachments: [],
//             body,
//             contentType: 'text',
//             createdAt: sub(new Date(), {minutes: 1}),
//             senderId: user.id
//         };
//
//         if (conversation) {
//             conversation.messages = [...conversation.messages, message];
//         } else {
//             const participants = [user];
//
//             recipientIds.forEach((recipientId) => {
//                 const contact = CONTACTS.find((_contact) => _contact.id === recipientId);
//
//                 if (!contact) {
//                     throw new Error('Contact not found');
//                 }
//
//                 participants.push({
//                     id: contact.id,
//                     avatar: contact.avatar,
//                     name: contact.name,
//                     username: contact.username
//                 });
//             });
//
//             conversation = {
//                 id: faker.datatype.uuid(),
//                 messages: [message],
//                 participants,
//                 type: participants.length === 2 ? 'ONE_TO_ONE' : 'GROUP',
//                 unreadCount: 0
//             };
//         }
//
//         const responseData = {
//             conversationId: conversation.id,
//             message
//         };
//
//         return [200, responseData];
//     } catch (error) {
//         console.error(error);
//         return [500, {message: 'Internal server error'}];
//     }
// });


app.listen(app_port, () => {
    console.log('Server is running ' + app_url + ':' + app_port + app_prefix)

})



