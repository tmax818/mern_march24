import {useState} from 'react';

const Groceries = (props) => {
    const filteredList = ["pearl onions", "thyme", "cremini mushrooms", "butter"];
    const [groceryList, setGroceryList] = useState(filteredList);

    const handleFilter = ()=>{
        const updatedList = groceryList.filter((grocery, index) => grocery.includes('y'));
        setGroceryList(updatedList);
    }
    

    return (
        <>
        <ul>
        {
            groceryList.map( (grocery, index) => 
            <li key={ index }>{ grocery}</li>
            )
        }
        </ul>

        <button onClick={handleFilter}>Filter</button>

        </>
    ); 
}
    
export default Groceries;

