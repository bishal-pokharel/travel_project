import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Blog = () => {
  const navigate = useNavigate();
  const [blogData, setBlogData] = useState([]);

  // Simulate API call to fetch blog data
  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        // Simulating an API call, replace this with your actual API
        const response = [
          {
            id: 1,
            title: "Trekking to Annapurna Base Camp: A Journey of a Lifetime",
            description: "The Annapurna Base Camp trek offers stunning views of snow-capped peaks and a deep immersion into the Himalayan culture. Passing through beautiful villages, lush forests, and picturesque landscapes, the trek is a once-in-a-lifetime experience that brings trekkers closer to the majesty of the Annapurna massif.",
            image: "assets/images/destination/d1.jpg",
            date: "August 9, 2019"
          },
          {
            id: 2,
            title: "Everest Base Camp: Conquering the Roof of the World",
            description: "Everest Base Camp trek is a dream for adventure lovers and trekkers alike. The journey leads you through Sherpa villages, lush forests, and towering Himalayan peaks, culminating in the breathtaking view of Mount Everest from its base camp. An incredible adventure, it combines stunning natural beauty with an extraordinary sense of achievement.",
            image: "assets/images/destination/d2.jpg",
            date: "August 9, 2019"
          },
          {
            id: 3,
            title: "Exploring the Serene Beauty of Shay Phoksundo Lake",
            description: "Shay Phoksundo Lake, located in the Dolpo region of Nepal, is one of the most stunning and serene places in the world. Surrounded by snow-capped mountains and Tibetan culture, the trek to this beautiful turquoise lake is an unforgettable experience. Its crystal-clear waters and breathtaking landscapes make it a hidden gem of Nepal.",
            image: "assets/images/destination/d3.jpg",
            date: "August 9, 2019"
          }
        ];
        setBlogData(response);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    fetchBlogData();
  }, []);

  // Handle redirection to specific blog
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
              <div 
                className="blog-col cursor-pointer" 
                onClick={() => handleBlog(blog.id)}  // Make each blog clickable
              >
                <div className="blog-img">
                  <img src={blog.image} alt={blog.title} />
                </div>
                <span>{blog.date}</span>
                <h4>{blog.title}</h4>
                <p>{blog.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
