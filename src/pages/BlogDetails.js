import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import MiniHeader from '../components/MiniHeader';
import { useDispatch, useSelector } from 'react-redux';
import { setBlogData } from '../redux/blogSlice';
import { API_URLS, BASE_IMAGE_URL } from './../api/url';
import { useQuery } from 'react-query';
import { fetcher } from '../api';

// Fetch blog data from API
const fetchBlogById = async (blogId) => {
  const response = await fetch(`/api/blogs/${blogId}`);
  if (!response.ok) {
    throw new Error('Error fetching blog data');
  }
  return response.json();
};

const BlogDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const blogData = useSelector((state) => state.blog.blogData);
  
  const blogId = Number(id); // Convert id to a number if necessary

  // Check if the blog data is already in Redux store
  const foundBlog = blogData.find((blog) => blog.id === blogId);

  // Use React Query to fetch data from the API if it's not in Redux
  const { data: apiBlog, isLoading, isError, error } = useQuery(
    ['blog', blogId],
    () => fetcher(`${API_URLS.BLOGS}`),
    {
      enabled: !foundBlog, // Only fetch if the blog is not already in Redux
    }
  );

  // Set the blog data (either from Redux or the API response)
  const [blog, setBlog] = useState(foundBlog || apiBlog);

  useEffect(() => {
    if (apiBlog) {
      dispatch(setBlogData([apiBlog])); // If blog fetched from API, save it to Redux
      setBlog(apiBlog); // Set the blog state to the API response
    }
  }, [apiBlog, dispatch]);

  if (isLoading || !blog) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <MiniHeader title={blog.title} />
      <div className="blog-details container my-5">
        <div className="row">
          {/* Left Section */}
          <div className="col-md-8 col-12">
            <h1>{blog.title}</h1>
            <div>
              <p>{blog.abstract}</p>
            </div>
            <div
              className="content"
              dangerouslySetInnerHTML={{
                __html: blog.body.replace(
                  /src="\/media/g, // Replace relative src starting with '/media'
                  `src="${BASE_IMAGE_URL}/media` // Prepend the base URL to the src
                ),
              }}
            />
            <Link to="/blog" className="back-link">Back to Blog List</Link>
          </div>

          {/* Right Section */}
          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <h3>Related Blogs</h3>
                <ul>
                  <li>
                    <a href="/blog/everest-base-camp-guide">Everest Base Camp: Everything You Need to Know</a>
                  </li>
                  <li>
                    <a href="/blog/high-altitude-trekking-tips">High Altitude Trekking Tips</a>
                  </li>
                  <li>
                    <a href="/blog/how-to-prepare-for-trekking">How to Prepare for Your First Trek</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
