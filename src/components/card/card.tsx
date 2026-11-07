import "./card.css"
import avatar from "../../assets/image copy 2.png"

const Card = ({ title, description }) => {
    return (
        <div className="card">
            <img src={avatar} alt="Icon" />

            <div className="cardText">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Card