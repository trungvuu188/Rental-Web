import React from 'react';

import './BlogList.css';

import BlogData from '../../../data/BlogData';
import { createSearchParams, Link, useNavigate } from 'react-router-dom';

const BlogList = () => {

  const navigate = useNavigate();

  const scrollToTop = (blogId) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    navigate({
      pathname: "/BlogDetails",
      search: createSearchParams({
        id: blogId,
      }).toString()
    });
  };

  return (
    <>
      <div className='blogListSection'>
        <div className='blogListHeaderContainer'>
          <div className='blogListHeader'>
            <h2>Blog</h2>
            <div className='blogListHeaderCategories'>
              {/* <p>ALL</p>
              <p>COMPANY</p> */}
              <p className='activeCategory'>Thời trang</p>
              {/* <p>STYLE</p>
              <p>TRENDS</p>
              <p>BEAUTY</p> */}
            </div>
          </div>
        </div>
        <div className='blogPostListContainer'>
          {BlogData.map((blogPost) => (
            <div className='blogPost'>
              <div className='blogPostThumb'>
                <img src={blogPost.blogThumbnail} alt='blogPost' />
              </div>
              <div className='blogPostContent'>
                <div className='blogPostContentDate'>
                  <p>bởi quản trị viên</p>
                  <p>{blogPost.blogDate}</p>
                </div>
                <div className='blogPostContentHeading'>
                  <a to='/BlogDetails' onClick={() => scrollToTop(blogPost.blogID)}>
                    {blogPost.blogHeading}
                  </a>
                </div>
                <div className='blogPostContentDescription'>
                  <p>
                    {blogPost.blogDesc}
                  </p>
                </div>
                <div className='blogPostContentReadMore'>
                  <a to='/BlogDetails' onClick={() => scrollToTop(blogPost.blogID)}>
                    Đọc tiếp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogList;
