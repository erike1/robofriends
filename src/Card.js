import React from "react";

const Card = ({id, name, email}) => {

  // var img_num = Math.random();
  const id_num = Math.ceil(Math.random() *9);
  
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src={`https://robohash.org/${id}?size=150x150`} alt="robots" className='center'/>

      <div className="name-and-email tc">
        <h3 className='robot-name'>{name}</h3>
        <p>{email}</p>
        <p>id= {id}</p>
      </div>

    </div>
  );
};

export default Card;