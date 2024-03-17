import DeleteButton from "./DeleteButton"



const Card = ({thing}) => {


    return (
        <div>
            <div className="card" style={{ width: "18rem", position: 'fixed',top: '25%',left: '40%' }}>
                <img src={"https://placehold.co/600x400"} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{thing.StringProperty}</h5>
                    <p className="card-text">{thing.NumberProperty}</p>
                    <DeleteButton thing={thing} />
                </div>
            </div>

        </div>
    )
}

export default Card