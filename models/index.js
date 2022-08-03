const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment')

User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Post.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE'
});

// Comment.belongsTo(Post, {
//   foreignKey: 'comment',
//   onDelete: 'CASCADE'
// })

User.hasMany(Comment, {
  foreignKey: 'user_id'
})

// Comment.belongsTo(User, {
//   foreignKey: 'post_id',
//   onDelete: 'CASCADE'
// })

module.exports = { User, Post, Comment };
