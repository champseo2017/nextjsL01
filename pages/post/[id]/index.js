import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Layout from "../../../components/Layout";
import Error from "next/error";
import { checkpost404 } from "../../../actions";
import { connect } from "react-redux";
import NextSeo from "next-seo";


const Postpage = props => {
  const routertitle = useRouter();
  const { id } = routertitle.query;

  // บทความ seo
  const DEFAULT_SEO = {
    title: id,
    description: "บทความ"
  };
  

  useEffect(() => {
    props.checkpost404(id);
  }, []);

  let datapost = "";
  if (typeof props.dataPosts === "undefined") {
    datapost = <Error statusCode={404} />;
  } else {
    datapost = (
      <div style={{ height: "100vh" }}>
        <h1>{id}</h1>
      </div>
    );
  }

  return (
    <Layout>
      {datapost}
      <NextSeo config={DEFAULT_SEO} />
    </Layout>
  );
};

function mapStateToProps(state) {
  return {
    isLodingposts: state.load_checkposttf,
    dataPosts: state.load_checkpost
  };
}

const mapDispatchToProps = {
  checkpost404
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Postpage);
