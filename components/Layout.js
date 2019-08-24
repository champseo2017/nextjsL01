import Head from 'next/head';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Layout = (props) => (
    <div style={{height: "100%"}}>
        <Head>
            <title>BitzPrice</title>
            <link rel="stylesheet" href="https://bootswatch.com/4/cerulean/bootstrap.min.css"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            <link href="excss/index.css" rel="stylesheet" key="indexcss"/>
            <style>{`
            html,body{
                height: 100%;
            }
            .container {
                height: calc( 100% - 100px ) !important;
            }
            div#__next {
                height: 100%;
            }
        `}</style>
        </Head>    
        <Navbar/>
        <div className="container">
            {props.children}
         </div>
         <Footer/>
     </div>
);

export default Layout;