import React from "react";

const commentsData = [
  {
    name: "Emma",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Emma",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Emma",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
      {
        name: "Emma",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Emma",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [
              {
                name: "Emma",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [
                  {
                    name: "Emma",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [
                      {
                        name: "Emma",
                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                        replies: [],
                      },
                    ],
                  },
                  {
                    name: "Emma",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Emma",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Emma",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Emma",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Emma",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
];

const Comment = ({ data }) => {
  console.log(data);
  const { name, text } = data;
  return (
    <div className="flex bg-gray-100 px-5 rounded-lg my-2">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnP7z4eskALryqEiK8X47vkR9-wpDMXwcVGZAWLbrPrDR4JM_tiDyZyTJhrsFyX8kRvRM&usqp=CAUg"
        alt=""
        className="w-8 h-9 pt-1 "
      />
      <div className="px-2">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return (
    <div>
      {comments.map((comment, index) => (
        <div>
          <Comment  data={comment} />

          <div className="ml-5 border border-l-black">
            <CommentsList key={index} comments={comment.replies} />
          </div>
        </div>
      ))}
    </div>
  );
};

const CommentsContainer = () => {
  return (
    <div className="m-5 px-5">
      <h2 className="font-bold text-2xl">Comments:</h2>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
