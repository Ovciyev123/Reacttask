import React from "react";

function Card({ name, description, price }) {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdxGapLRKsiWs4CrjowmhqCf9LxYsPq3JC1g&s"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">{price}</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
}

export default Card;
