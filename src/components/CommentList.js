import React from 'react'

const CommentList = (props) => {
    const comments = props.comments.map((comment, index) => {
        return (
            <div key={index}>
                <h4 className="text-xl font-bold">{comment.username}</h4>
                <p className="mt-1 mb-4">{comment.text}</p>
            </div>
        )
    })
    return (
        <div>
            <h3 className="sm:text-2xl text-xl font-bold mt-6 mb-6 text-gray-900">Comments :</h3>
            {comments}
        </div>
    )
}

export default CommentList
