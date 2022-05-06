import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from '../components/Pagination';
import Paginate from './utils/Paginate';


const Home = () => {
  const [posts,setPosts] =  useState([]);
  const [currentPage,setCurrentPage] = useState(1);
  const [prevPage,setPrevPage]=useState(0);
  const [nextPage, setNextPage] = useState(0);
  const pageSize = 10;

  const handlePageChange = ( page ) =>{
    setCurrentPage(page);
  }
  const handlePrevPage = (page) =>{
    setCurrentPage(page-1);
  }
  const handleNextPage = (page) =>{
    setCurrentPage(page+1);
  }

  const paginatePosts = Paginate(posts,currentPage,pageSize);
  useEffect(() =>{
    const getPosts =  async ()  =>{
      const {data: res}= await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res);
      // console.log(res);
    }
    getPosts();
  },[]);
  return (
    <div className="container">
      <h1>Next.js Pagination</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
          </tr>
        </thead>
        <tbody>
          {paginatePosts.map((post) => (
            <tr
              key={post.id}
              className="p-5 "
              style={{ border: "1px solid #666" }}
            >
              <td
                style={{
                  padding: "1rem",
                  width: "10%",
                  textAlign: "center",
                  borderRight: "1px solid #666",
                }}
              >
                {post.id}
              </td>
              <td
                style={{
                  padding: "1rem",
                  width: "30%",
                  textAlign: "left",
                  borderRight: "1px solid #666",
                }}
              >
                {post.title}
              </td>
              <td
                style={{
                  padding: "1rem",
                  width: "30%",
                  textAlign: "left",
                }}
              >
                {post.body}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination
        items={posts.length}
        currentPage={currentPage}
        pageSize={pageSize}
        onPageChange={handlePageChange}
        next={handleNextPage}
        prev={handlePrevPage}
      />
    </div>
  );
}

export default Home