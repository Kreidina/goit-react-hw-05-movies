import ReactPaginate from 'react-paginate';
import styled from '@emotion/styled';

const MyPaginate = styled(ReactPaginate)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  list-style-type: none;
  width: 650px;
  margin: 1.5rem auto;

  li a {
    border-radius: 7px;
    padding: 0.1rem 1rem;
    border: rgb(255, 72, 0) 1px solid;
    cursor: pointer;
    background: rgb(255, 72, 0);
    color: #fff;
  }
  li a[aria-current='page'] {
    background-color: #fff;
    color: #000;
  }
`;
export const Paginagion = ({ handlePageChange, total, currentPage }) => {
  const totalPage = () => {
    if (total > 100) {
      return 100;
    } else {
      return total;
    }
  };
  const pages = totalPage();
  return (
    <MyPaginate
      previousLabel={'<<'}
      nextLabel={'>>'}
      breakLabel={'...'}
      breakClassName={'pagination__break'}
      pageCount={pages}
      marginPagesDisplayed={2}
      pageRangeDisplayed={4}
      onPageChange={handlePageChange}
      containerClassName={'pagination'}
      pageClassName={'pagination__page'}
      activeClassName={'pagination__page--active'}
      previousClassName={'pagination__previous'}
      nextClassName={'pagination__next'}
      disabledClassName={'pagination__disabled'}
      forcePage={currentPage - 1}
    />
  );
};
