import React from 'react'

const CharCard = ({char}) => {
    console.dir(char)
    return (
        <div>
            <div className="card" style={{width: "18rem"}}>
                <img src={char.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{char.name}</h5>
                        <p className="card-text">{char.status}</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
            </div>
        </div>
    )
}

export default CharCard