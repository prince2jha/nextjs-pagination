import React from 'react';
import  _ from 'lodash';
const paginate = {
  width: "90%",
  height: "100px",
//   background: "#000",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const Pagination = ({items,pageSize,currentPage, onPageChange,next,prev}) => {
  const pagesCount = Math.ceil(items / pageSize);

  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);
  return (
    <div className="container mx-auto  p-5" style={paginate}>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a
              className="page-link"
              onClick={() => prev(currentPage)}
              style={{ cursor: "pointer" }}
            >
              <span>&larr;&larr; Previous </span>
            </a>
          </li>
          {pages.map((page) => (
            <li
              key={page}
              className={
                page === currentPage ? "page-item active" : "page-item"
              }
            >
              <a
                onClick={() => onPageChange(page)}
                className="page-link"
                style={{ cursor: "pointer" }}
              >
                {page}
              </a>
            </li>
          ))}
          <li className="page-item">
            <a
              className="page-link"
              onClick={() => next(currentPage)}
              style={{ cursor: "pointer" }}
            >
              <span>Next &rarr;&rarr; </span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;