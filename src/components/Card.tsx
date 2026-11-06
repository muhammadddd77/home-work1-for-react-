

const Card = ({ title, age, children }) => {
    return (
        <div>
            <h1>{title}</h1>
            <h3>{age}</h3>
            {children}
        </div>
    );
};

export default Card;