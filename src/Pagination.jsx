import React from 'react';

const Pagination = ({ prevPageUrl, nextPageUrl, onPageChange, currentPage }) => {
  const handlePrevPage = () => {
    onPageChange(prevPageUrl);
  };

  const handleNextPage = () => {
    onPageChange(nextPageUrl);
  };

  return (
    <div className="pagination">
      {prevPageUrl && (
        <button onClick={handlePrevPage}>Previous</button>
      )}
      {currentPage !== 1 && (
        <span style={{color : 'white' }}>&nbsp; {currentPage}</span>
      )}
      {nextPageUrl && (
        <React.Fragment>
          &nbsp;&nbsp;&nbsp;
          <button onClick={handleNextPage}>Next</button>
        </React.Fragment>
      )}
    </div>
  );
};

export default Pagination;
