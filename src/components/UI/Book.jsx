import { icon } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {

  return (
    <div className="book">
      <Link to="/">
        <figure className="book__img--wrapper">
          <img src={book.url} alt="" className="book__img" />
        </figure>
      </Link>
      <div className="book__title">
        <Link to="/" className="book__title--link">
          {book.title}
        </Link>
      </div>
      <div className="book__ratings">
        {
            new Array(Math.floor(book.rating)).fill(0).map((_, index) => <FontAwesomeIcon icon='star' key={index}/> ) 
        }
        {  
        // if rating isnt intiger(.5), print half star
            !Number.isInteger(book.rating) && <FontAwesomeIcon icon='star-half-alt' />
        }
      </div>
      <div className="book__price">
        {/* if there is a sale price, print orig and sale price. 
        if no sale, print orig price */}
        {book.salePrice ? (
          <>
            <span className="book__price--normal">
              ${book.originalPrice.toFixed(2)}
            </span>
            ${book.salePrice.toFixed(2)}
          </>
        ) : (
          <>${book.originalPrice.toFixed(2)}</>
        )}
      </div>
    </div>
  );
};

export default Book;
