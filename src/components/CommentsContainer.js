import React from "react";

const commentsData = [
  {
    name: "Akshay Saini",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Manoj Kumar",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
      {
        name: "AKhilesh",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Akshay Saini",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [
              {
                name: "Akhilesh",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [],
              },
              {
                name: "Akshay Saini",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Tarun",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "DK Singh",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Akshay Saini",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
    ],
  },
  {
    name: "Krish",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Bharath",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Akshay Saini",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Rahul",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [],
          },
        ],
      },
      {
        name: "Bharath",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex  items-center shadow-sm bg-gray-100 p-2 my-2 rounded-lg">
      <img
        className="w-10 h-10"
        alt="user"
        src="https://static.vecteezy.com/system/resources/previews/000/550/731/original/user-icon-vector.jpg"
      />
      <div className="px-2">
        <p className="font-bold ">{name}</p>
        <p className="text-sm">{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 ml-5 border-l border-black">
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="mt-1 ml-3  p-2">
      <h1 className="font-bold text-2xl">Comments</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
