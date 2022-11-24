import React from 'react';
import dateFormat from 'dateformat';

const LoadComments = props => {

    return (
        <div className='loadedComments'>
            {
                props.comments.map(comment => {
                    return (
                        <div>
                            <h5>{comment.author}</h5>
                            <p>{comment.comment}</p>
                            <p>{dateFormat(comment.date, "dddd, mmmm dS, yyyy, h:MM TT")}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default LoadComments;