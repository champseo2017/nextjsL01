import Fetch from 'isomorphic-unfetch';
import Layout from "../components/Layout";
import Prices from '../components/Prices'
import UserForm from '../components/UserForm'

const Index = (props) => ( 
      <Layout>
        <div>
          <h1>Welcome to BitzPrice</h1>
          <p>Check current Bitcoin rate</p>
            <Prices bpi={props.bpi}/>
            <p></p>
            <UserForm/>
        </div>
      </Layout>
);

// fetch data async  
Index.getInitialProps = async function (){
    const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    const data = await res.json();
    
    return {
      // props 
      bpi: data.bpi
    }
} 

export default Index;