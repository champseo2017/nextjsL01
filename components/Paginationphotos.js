import React from 'react'

const Paginationphotos = ({photosPerPage, totalPhotos, paginatephotos}) => {
    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(totalPhotos / photosPerPage); i++){
        pageNumbers.push(i);
    }
    return (
       <nav>
           <ul className="pagination">
               {pageNumbers.map(number => (
                   <li key={number} className="page-item">
                       <a onClick={() => paginatephotos(number)} href="#blog" className="page-link">
                           {number}
                        </a>
                   </li>
               ))}
            </ul>
      </nav>
    )
}

export default Paginationphotos
