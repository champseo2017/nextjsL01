import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import NextSeo from "next-seo";
import Posts from "../components/Posts/posts"
import { connect } from "react-redux";
import { loadPosts } from "../actions";

// บทความ seo
const DEFAULT_SEO = {
    title: "บทความ",
    description: "บทความ"
};

const Article = (props) => {

    // posts
    const [numberposts] = useState(100);

    useEffect(() => {
        props.loadPosts(numberposts)
    }, [])

    let errorlodingposts = ''
    let loadingposts = ''

    if (props.isRejectedposts) errorlodingposts = <div>Error....lodingposts server</div>

    if (props.isLodingposts) loadingposts = <div>Loding....Posts</div>

    return (
        <Layout>
            {errorlodingposts}
            <div style={{ height: "100vh" }}>
                <h1>บทความ</h1>
                {loadingposts}
                <Posts data={props.dataposts} />
            </div>
            <NextSeo config={DEFAULT_SEO} />
        </Layout>
    )
}

function mapStateToProps(state) {
    return {
        dataposts: state.dataPosts,
        isRejectedposts: state.isRejectedposts,
        isLodingposts: state.isLodingposts
    }
}

const mapDispatchToProps = {
    loadPosts
};

export default connect(mapStateToProps, mapDispatchToProps)(Article)