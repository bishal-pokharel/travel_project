import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import MiniHeader from '../components/MiniHeader';

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    // Fetch blog details based on the blog ID
    const fetchBlogDetails = async () => {
      try {
        const response = await fetch(`/api/blogs/${id}`); // Replace with your actual API endpoint
        const data = await response.json();
        setBlog(data);
      } catch (error) {
        console.error("Error fetching blog details:", error);
      }
    };

    fetchBlogDetails();
  }, [id]);

//   if (!blog) {
//     return <div>Loading...</div>; // Loading state
//   }

  return (
    <>
    <MiniHeader title={'blog title goes here'} />
    <div className="blog-details">
      <h1>Blog Title</h1>
      {/* <img src= alt= /> */}
      <p>this is the blog title and the descriptions..... b</p>
      <div className="content">
        <p>actual contents are displayed here...</p>
      </div>
      <Link to="/blog" className="back-link">Back to Blog List</Link>
    </div>
    </>
  );
};

export default BlogDetails;
