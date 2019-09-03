import { withRouter } from "next/router";
import React, { Component, PureComponent } from 'react'
import Layout from "../../../components/Layout";
import Error from "next/error";
import { checkpost404, loadpostid, Saveidposts } from "../../../actions";
import { connect } from "react-redux";
import NextSeo from "next-seo";


class Postpage extends Component {

  constructor(props) {
    const { router } = props
    var integerid = parseInt(router.query.id, 10);
    super(props);
    this.state = {
      id: integerid
    }
  }

  componentDidMount() {
    this.fetchpost()
  }

  componentDidUpdate() {
    this.props.checkpost404(this.state.id)
  }

  fetchpost = async () => {
    await this.props.loadpostid(this.state.id)
  }


  createMarkup() {
    return { __html: this.props.datapostid };
  }

  Postcontent() {
    return <div style={{ height: "100vh" }} dangerouslySetInnerHTML={this.createMarkup()} />
  }

  render() {
  
    const DEFAULT_SEO = {
      title: this.props.titleposid,
      description: "บทความ"
    };
    let loadingposts = "";
    if (this.props.lodingpost) loadingposts = <div>Loding....Posts</div>;
    let datapost = "";

    if (this.props.isLodingposts === false) {
      datapost = <Error statusCode={404} />;
      
    } else {
      datapost = <div>
      {loadingposts}
      {this.Postcontent()}
      </div>
    }
    return (
      <Layout>
        {datapost}
        <NextSeo config={DEFAULT_SEO} />
      </Layout>
    )
  }

};

function mapStateToProps(state) {
  return {
    isLodingposts: state.load_checkposttf,
    dataPosts: state.load_checkpost,
    titleposid: state.titlepostid,
    datapostid: state.dataPosts,
    tfloadpostid: state.isRejectedposts,
    savepostsid: state.savepostsid,
    lodingpost: state.isLodingpostsid
  };
}

const mapDispatchToProps = {
  checkpost404,
  loadpostid,
  Saveidposts
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Postpage));