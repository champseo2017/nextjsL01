import Post from './post'

const Posts = (props) => {

    let data = props.data
    
    return (
        <React.Fragment>
            {data && data.map(e => {
                return (
                    <Post data={e} key={e.id} />
                )
            })}

        </React.Fragment>
    )
}

export default Posts