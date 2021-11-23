## user story
- không có chế độ là khách, chỉ có chế độ là người dùng => bắt buộc người dùng phải đăng nhập trước khi sử dụng.
- Là người dùng, tôi muốn:
  + tạo status mới.
  + tạo story mới.
  + tương tác với các bài post của người dùng khác.
  + tạo group để add bạn bè vào và trao đổi cũng như post bài viết.
  + kết bạn với các người dùng khác.
  + thay đổi profile của mình.
  + nhắn tin, trò chuyện với bạn bè của mình.
  + ghé thăm trang cá nhân của người dùng khác.
  + nhận được thông báo từ follow và bạn bè.
  + gắn nhiều tag, bạn bè vào bài viết của mình.
  + lưu bài viết mà tôi muốn.
  + xem trang chủ theo đề xuất (xem theo follow và bạn bè).
  + đăng bài lên trang cá nhân của người dùng khác.// thay bằng tag


# userSchema
{
    userName: {
        type: string,
        require: true,
    },
    email:{
        type: String,
        require: true,
    },
    role:{
        type: String,
        default: 'member'
    }
    password:{
        type: String,
        require: true,
    }
}

# profile

{
    imgUrl: String,
    userId: {
        type: moongoes.Types.ObjectId,
        require: true
    },
    adress: String,
    description: String,
    friend: [
        type: moongoes.Types.ObjectId,
    ]
}

# postSchema

{
    imgUrl: [
        type: array,
        default: []
    ]
    content: {
        type: String,
        require: true,
    },
    likeCount :{
        type: Number,
        default: 0,
    },
    status: String,
    groupId: moongoes.Types.ObjectId,
    createBy: {
        type: moongoes.Types.ObjectId,
        require: true
    }
}

# commentSchema

{
    postId: {
        type: moongoes.Types.ObjectId,
        require: true
    },
    content: {
        type: String,
        require: true,
    },
    createBy: {
        type: moongoes.Types.ObjectId,
        require: true
    },
    imgComment: [
        type: String,
    ]
}

# groupSchema

{
    name: {
        type: String,
        require: true,
    },
    imgUrl: {
        type: String,
        require: true,
    },
    adminId: {
        type: moongoes.Types.ObjectId,
        require: true
    }
}

# memberGroupSchema
{
    userId: {
        type: moongoes.Types.ObjectId,
        require: true
    },
    groupId:{
        type: moongoes.Types.ObjectId,
        require: true
    }
}

# message

# savePostSchema


# tag
{
    postId: {
        type: String,
        require: true,
    }
}

# follow



