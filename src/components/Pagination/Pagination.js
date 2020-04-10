import React from 'react';
import {Link} from "react-router-dom";
import './Pagination.scss';

const CN = 'pagination';

export const Pagination = (props) => {
    const {page: currPage, totalPages, changePage} = props;
    let pagesRange = 4;

    console.log(window.innerWidth);

    if(window.innerWidth <= 768){
        pagesRange = 2;
    }

    const pagesArray = [];
    const startPagination = currPage - pagesRange > 0 ? currPage - pagesRange : 1;
    const endPagination = currPage + pagesRange < totalPages ? currPage + pagesRange : totalPages;

    if(startPagination === 1){
        for (let i = startPagination; i <= pagesRange*2; i++) {
            pagesArray.push(i);
        }
    } else if(endPagination === totalPages){
        for (let i = totalPages - pagesRange*2; i <= endPagination; i++) {
            pagesArray.push(i);
        }
    } else {
        for (let i = startPagination; i <= endPagination; i++) {
            pagesArray.push(i);
        }
    }



    return (
        <div className={CN}>
            <Link
                to={`/?page=${currPage - 1 >= 1 ? currPage - 1 : 1}`}
                className={`item`}
            >
                {'<'}
            </Link>
            {
                pagesArray.map((pageNum) => (
                    <Link key={pageNum}
                          to={`/?page=${pageNum}`}
                          className={`item ${pageNum === currPage && 'active'}`}
                          onClick={() => changePage(pageNum)}
                    >
                        {pageNum}
                    </Link>
                ))
            }
            <Link
                to={`/?page=${currPage + 1 <= totalPages ? currPage + 1 : totalPages}`}
                className={`item`}
            >
                {'>'}
            </Link>
        </div>
    );
};
