import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import NextSeo from "next-seo";
import Posts from "../components/Posts/posts";
import { connect } from "react-redux";
import { loadPosts } from "../actions";
import Pagination from "react-js-pagination";
import axios from "axios";

// บทความ seo
const DEFAULT_SEO = {
  title: "บทความ",
  description: "บทความ"
};

const Article = props => {
  // post
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const postsvalue = 100;

  useEffect(() => {
    // fetchPosts
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(
        `https://restapiwp.saleallday.com/wp-json/wp/v2/posts?per_page=${postsvalue}`
      );
      setPosts(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOffFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOffFirstPost, indexOfLastPost);

  let loadingposts = "";

  if (loading) loadingposts = <div>Loding....Posts</div>;

  const stringul = "pagination";
  const stringli = "page-item";
  const stringa = "page-link";

  const handlePageChange = pageNumber => {
    //console.log(`active page is ${pageNumber}`)
    setCurrentPage(pageNumber);
    window.location.href = "#post-posts";
  };

  const paginationposts = (
    <Pagination
      activePage={currentPage}
      itemsCountPerPage={postsPerPage}
      totalItemsCount={posts.length}
      pageRangeDisplayed={5}
      onChange={handlePageChange}
      innerClass={stringul}
      itemClass={stringli}
      linkClass={stringa}
    />
  );

  return (
    <Layout>
      <div id="post-posts" style={{ height: "100vh" }}>
        <h1>บทความ</h1>
        {loadingposts}
        <Posts data={currentPosts} />
        
      </div>
      <p>
      {paginationposts}
      </p>
      <NextSeo config={DEFAULT_SEO} />
    </Layout>
  );
};

function mapStateToProps(state) {
  return {
    dataposts: state.dataPosts,
    isRejectedposts: state.isRejectedposts,
    isLodingposts: state.isLodingposts
  };
}

const mapDispatchToProps = {
  loadPosts
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Article);
