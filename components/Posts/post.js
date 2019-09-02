import Link from 'next/link';
import Pagination from "react-js-pagination";

const Post = (props) => {

    let data = props.data

    return (
        <React.Fragment>
            <h3>
            <Link href='/post/[id]' as={`/post/${data.id}`}>
                    <a>{data.title.rendered}</a>
            </Link>
            </h3>

        </React.Fragment>
    )
}

export default Post