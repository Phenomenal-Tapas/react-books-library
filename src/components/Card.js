import React, { useState } from "react";
import Modal from "./Modal";
import "../styles/Card.css";

const Card = ({ book }) => {
  const [showModal, setShowModal] = useState(false);
  const [bookDetails, setBookDetails] = useState();

  return (
    <>
      {book.map((item) => {
        let thumbnail =
          item.volumeInfo.imageLinks &&
          item.volumeInfo.imageLinks.smallThumbnail;

        let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;

        if (thumbnail !== undefined && amount !== undefined) {
          return (
            <div key={item.id}>
              <div
                className="app__card"
                onClick={() => {
                  setShowModal(true);
                  setBookDetails(item);
                }}
              >
                <img src={thumbnail} alt="" />
                <div className="card__bottom">
                  <h3 className="card__title">{item.volumeInfo.title}</h3>
                  <p className="card__amount">&#8377; {amount}</p>
                </div>
              </div>

              <Modal
                show={showModal}
                item={bookDetails}
                onClose={() => setShowModal(false)}
              />
            </div>
          );
        }
      })}
    </>
  );
};
export default Card;
