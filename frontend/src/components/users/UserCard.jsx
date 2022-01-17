import PropTypes from 'prop-types'
import {useEffect, useState} from 'react'

function UserCard({text, username, type}) {

  return (
    <div>
      <div className={`shadow-lg card ${type === 'translated'? 'bg-blue-400' : 'bg-primary'} hover:bg-blue-500 my-5 transition duration-300 `}>
        <div className="card-body">
          <h2 className="card-title">{username}</h2>
          <p className='mt-2'>{text}</p>
        </div>
      </div>
    </div>
  );
}

UserCard.propTypes = {
    text: PropTypes.string.isRequired,
    username: PropTypes.string,
}

UserCard.defaultProps = {
    text: 'Waiting for a slang text',
    username: 'User',
}

export default UserCard;
