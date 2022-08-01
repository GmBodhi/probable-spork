import { PartialUser, Quiz } from ".";

export const friends: PartialUser[] = [
  {
    id: "1",
    name: "John Doe",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    status: "online",
  },
  {
    id: "2",
    name: "Jane Doe",
    avatar: "https://randomuser.me/api/portraits/men/77.jpg",
    status: "online",
  },
  {
    id: "3",
    name: "Jack Doe",
    avatar: "https://randomuser.me/api/portraits/men/78.jpg",
    status: "online",
  },
  {
    id: "4",
    name: "Jill Doe",
    avatar: "https://randomuser.me/api/portraits/men/79.jpg",
    status: "online",
  },
  {
    id: "5",
    name: "John Doe",
    avatar: "https://randomuser.me/api/portraits/men/70.jpg",
    status: "online",
  },
];

export const quiz: Quiz = {
  id: "4353",
  name: "Test001",
  description: "This is supposed to be a description",
  questions: [
    {
      id: "0",
      question: "This is supposed to be a question",
      mediaType: null,
      mediaUrl: null,
      choices: [
        {
          id: "0",
          type: "text",
          content: "This is supposed to be a choice",
          url: null,
          correct: false,
        },
        {
          id: "1",
          type: "text",
          content: "This is supposed to be a choice",
          url: null,
          correct: false,
        },
        {
          id: "2",
          type: "text",
          content: "This is supposed to be a choice",
          url: null,
          correct: false,
        },
        {
          id: "3",
          type: "text",
          content: "This is supposed to be a choice",
          url: null,
          correct: true,
        },
      ],
    },
    {
      id: "1",
      question: "This is supposed to be a question",
      mediaType: null,
      mediaUrl: null,
      choices: [
        {
          id: "0",
          type: "text",
          content: "This is supposed to be a choice",
          url: null,
          correct: false,
        },
        {
          id: "1",
          type: "text",
          content: "This is supposed to be a choice",
          url: null,
          correct: false,
        },
        {
          id: "2",
          type: "text",
          content: "This is supposed to be a choice",
          url: null,
          correct: false,
        },
        {
          id: "3",
          type: "text",
          content: "This is supposed to be a choice",
          url: null,
          correct: true,
        },
      ],
    },
    {
      id: "2",
      question: "This is supposed to be a question",
      mediaType: null,
      mediaUrl: null,
      choices: [
        {
          id: "0",
          type: "text",
          content: "This is supposed to be a choice",
          url: null,
          correct: false,
        },
        {
          id: "1",
          type: "text",
          content: "This is supposed to be a choice",
          url: null,
          correct: false,
        },
        {
          id: "2",
          type: "text",
          content: "This is supposed to be a choice",
          url: null,
          correct: false,
        },
        {
          id: "3",
          type: "text",
          content: "This is supposed to be a choice",
          url: null,
          correct: true,
        },
      ],
    },
    {
      id: "3",
      question: "This is supposed to be a question",
      mediaType: null,
      mediaUrl: null,
      choices: [
        {
          id: "0",
          type: "text",
          content: "This is supposed to be a choice",
          url: null,
          correct: false,
        },
        {
          id: "1",
          type: "text",
          content: "This is supposed to be a choice",
          url: null,
          correct: false,
        },
        {
          id: "2",
          type: "text",
          content: "This is supposed to be a choice",
          url: null,
          correct: false,
        },
        {
          id: "3",
          type: "text",
          content: "This is supposed to be a choice",
          url: null,
          correct: true,
        },
      ],
    },
  ],
};
