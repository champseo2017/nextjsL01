import React from 'react'

const Posts = ({posts, loading}) => {
    if(loading){
        return <h2>Loading...</h2>
    }
    return <ul className="list-group mb-4">
        {posts && posts.map(post =>(
            <li key={post.id} className="list-group-item">
                <h3 style={{paddingBottom: "10px"}}>{post.title}</h3>
                <p>{post.body}</p>
            </li>
        ))}
    </ul>;
}

export default Posts