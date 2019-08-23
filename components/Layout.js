import Head from 'next/head';
import Navbar from '../components/Navbar'

const Layout = (props) => (
    <div>
        <Head>
            <title>BitzPrice</title>
            <link rel="stylesheet" href="https://bootswatch.com/4/cerulean/bootstrap.min.css"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        </Head>    
        <Navbar/>
        <div className="container">
            {props.children}
         </div>
     </div>
);

export default Layout;