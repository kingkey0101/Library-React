import React from "react";

const Price = ({originalPrice, salePrice}) => {
  return (
    <div className="book__price">
      {/* if there is a sale price, print orig and sale price. 
        if no sale, print orig price */}
      {salePrice ? (
        <>
          <span className="book__price--normal">
            ${originalPrice.toFixed(2)}
          </span>
          ${salePrice.toFixed(2)}
        </>
      ) : (
        <>${originalPrice.toFixed(2)}</>
      )}
    </div>
  );
};

export default Price;
