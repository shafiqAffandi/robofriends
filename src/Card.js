import React, { Fragment } from 'react';

const Card = (props) => {
  const { name, email, username } = props;
  return (
    <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img alt='robot' src={`https://robohash.org/${name + '12'}?200x200`} />
      <Fragment>
        <h2>{name}</h2>
        <h3>{username}</h3>
        <p>{email}</p>
      </Fragment>
    </div>
  );
}

export default Card;