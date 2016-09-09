var Schemas = {};

Post = new Mongo.Collection("post");
Comment = new Mongo.Collection("comment");

Schemas.Post = new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    max: 200
  },
  author: {
    type: String,
    label: "Author"
  },
  content: {
    type: String,
    label: "Content",
    optional: true,
    max: 1000
  }
});

Schemas.Comment= new SimpleSchema({
  ordering: {
    type: Number,
    label: "Order",
    max: 200
  },
  author: {
    type: String,
    label: "Author"
  },
  content: {
    type: String,
    label: "Content",
    optional: true,
    max: 1000
  }
});


Post.attachSchema(Schemas.Post);


Comment.attachSchema(Schemas.Comment);