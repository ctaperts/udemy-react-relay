import React from 'react';

const Card = (props) => {
  const cardStyle = {
    height: 150,
    width: 250,
    padding: 0,
    margin: 10,
    backgroundColor: "#49DD8E",
    WebkitFilet: "drop-shadow(0px 0px 5px #666)",
    filter: "drop-shadow(0px 0px 5px #666)"
  };
  return <div style={cardStyle}></div>
}

export default Card;
