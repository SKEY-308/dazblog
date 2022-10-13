import React from 'react'

const PostCard = ({ post }) => {

    console.log(post)

    const { title, excerpt } = post

    return (
        <div>
            {title}
            {excerpt}
        </div>
    )
}

export default PostCard