import { useState } from "react";

const ControlledInput = () => {

    const [value, setValue] = useState("");

    const handleChange = (e) => {
        // console.log(e.target.value)
        setValue(e.target.value);
    };

    console.log("value is: ",value)

    return (
        <input type="text" value={value} onChange={handleChange} />
    );
};
export default ControlledInput;
