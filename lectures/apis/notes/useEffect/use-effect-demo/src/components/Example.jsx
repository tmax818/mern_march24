import {useState, useEffect} from 'react';

const Example = (props) => {
    const [people, setPeople] = useState([]);
 
    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(response => response.json())
            .then(res => {
                console.log(res.results)
                setPeople(res.results)
            })

        
    }, []);
 
    return (
        <div>
            {people.length > 0 && people.map((person, index)=>{
                return (<div key={index}>
                    {person.name}
                    <img src={person.image} alt="" />
                    </div>)
            })}
        </div>
    );
}
export default Example;

