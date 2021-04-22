const express = require('express');

const app = express();

app.use('/api/posts', (req, res, next) => {
  const posts = [
    {
      id: "shdjfjshd7",
      title: "first server-side post",
      content: "This is coming from Asgardian server"
    },
    {
      id: "shd43636d7",
      title: "Second server-side post",
      content: "This is coming from Captain Marvel!"
    }
  ];
  res.status(200).json({
    message: 'Posts fetched succesfully!',
    posts: posts
  });
});

module.exports = app;
