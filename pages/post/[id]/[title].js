import { useRouter } from 'next/router';
import Layout from "../../../components/Layout";

const Postpage = (props) => {

    const router = useRouter()
    const { id } = router.query

    return (
        <Layout>
        <React.Fragment>
        <h1>{id}</h1>
        </React.Fragment>
        </Layout>
    )
}

export default Postpage