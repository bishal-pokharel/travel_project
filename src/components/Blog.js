import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { fetcher } from '../api';
import { API_URLS, BASE_IMAGE_URL } from '../api/url';
import { useDispatch, useSelector } from 'react-redux';
import { setBlogData } from '../redux/blogSlice';

const Blog = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const blogData = useSelector((state) => state.blog.blogData);

  const { data, isLoading, isError, error } = useQuery('blog', () => fetcher(API_URLS.BLOGS));

  useEffect(() => {
    if (data) {
      console.log('Fetched data:', data);
      const blogArray = Array.isArray(data) ? data : [data]; // Wrap the object in an array if it's a single blog post
      dispatch(setBlogData(blogArray));
    }
  }, [data, dispatch]);

  useEffect(() => {
    // console.log('Updated blogData:', blogData);
  }, [blogData]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    // console.error('Error fetching data:', error);
    return <div>Error: {error.message || error}</div>;
  }

  if (!Array.isArray(blogData)) {
    return <div>Error: Invalid data structure</div>;
  }

  const handleBlog = (id) => {
    navigate(`/blog/${id}`);
  };

  return (
    <div className="container-fluid blog">
      <div className="container">
        <div className="session-title">
          <h2>Our Blog</h2>
          <p>Dive into a world of stories, insights, and inspiration. Explore topics that spark curiosity, fuel passion, and bring you closer to the moments that matter most.</p>
        </div>
        <div className="blog-row row">
          {blogData.map((blog) => (
            <div className="col-lg-4 col-md-6" key={blog.id}>
              <div className="blog-col cursor-pointer" onClick={() => handleBlog(blog.id)}>
                <div className="blog-img position-relative">
                  <img src={blog.thumbnail?.url ? BASE_IMAGE_URL + blog.thumbnail.url : "assets/images/about.png"} alt={blog.title} />
                <h4 className='blog-title'>{blog.title}</h4>
                </div>
                <div className='p-2'>
                  <span>{blog.meta?.date || 'Unknown Date'}</span>
                  <p>{blog.abstract}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
