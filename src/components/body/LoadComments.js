import DateFormat from 'dateformat';

const LoadComments = ({ comments }) =>
    comments.map((commnt) => {
        const { id, rating, comment, author, date } = commnt;
        return (
            <div key={id} style={{ marginBottom: '15px' }}>
                <h5>{author}</h5>
                <p style={{ marginBottom: '2px' }}>{comment}</p>
                <p style={{ marginBottom: '2px' }}>Rating: {rating} Star</p>
                <p style={{ marginBottom: '2px' }}>
                    {DateFormat(date, 'dddd, mmmm dS, yyyy, h:MM TT')}
                </p>
            </div>
        );
    });

export default LoadComments;
