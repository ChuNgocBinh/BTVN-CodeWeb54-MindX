import React from 'react';
import request from '../../api/request'


export default function PostDetail() {
  const [comments, setComments] = React.useState([])
  const [imgPost, setImgpost] = React.useState('')
  const [text, setText] = React.useState('')

  const fetchComment = async (postId) => {
    const res = await request({
      method: 'GET',
      url: `/posts/${postId}/comments`
    })
    let data = res.data

    setComments(data)
  }

  const fetchPostId = async (postId) => {
    const res = await request({
      method: 'GET',
      url: `/posts/${postId}`
    })
    let url = res.data.imageUrl
    setImgpost(url)
  }

  React.useEffect(() => {
    fetchComment('61b822066a42a1472a0078f1')
  }, [])

  React.useEffect(() => {
    fetchPostId('61b822066a42a1472a0078f1')
  }, [])

  const handleChange = (e) => {
    setText(e.target.value)
  }



  const handleKeypress = (e) => {
    const key = e.key === 'Enter'
    if (key) {
      // fake tam user
      setComments(prevComment => [...prevComment, {
        createBy: { userName: 'chu ngoc bình' },
        content: text
      }])
      setText('')
      // gọi api tọa mới comment nếu đã đăng nhập
    }

  }

  return (

    <div className="d-flex justify-content-center mt-5">
      <div className="col-sm-3 me-3">
        <img src={imgPost} className='w-100' alt='anh' />
      </div>
      <div className="border col-sm-3 d-flex flex-column overflow-auto" >
        <div className="flex-grow-1">
          {comments.map(comment => (
            <div key={comment._id}>
              <span><b>{comment.createBy.userName + ':'}</b></span>
              <span>{comment.content}</span>
            </div>
          ))}
        </div>
        <div >
          <input
            className="form-control"
            value={text}
            onChange={handleChange}
            onKeyPress={handleKeypress}
          />
        </div>
      </div>
    </div>
  )
}