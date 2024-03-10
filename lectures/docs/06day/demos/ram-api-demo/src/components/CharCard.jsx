import React from 'react'

const CharCard = ({ char }) => {
    console.log(char)

    return (
        <div className="col-sm-6">
            <div className="card" style={{ width: '18rem' }}>
                <img className="card-img-top" src={char.image} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{char.name}</h5>
                    <p className="card-text">{char.location.name}</p>
                    <p className="card-text">{char.status}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}

export default CharCard