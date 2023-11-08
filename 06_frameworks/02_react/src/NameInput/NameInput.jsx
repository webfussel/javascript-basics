import {useState} from "react";

const NameInput = () => {
    const [name, setName] = useState('')

    return (
        <div className="textbox">
            <div>
                <span>Profile - </span>
                <span>First Name: </span>
                <span className="name">{name}</span>
            </div>
            <input type="text"
                   value={name}
                   placeholder="Name"
                   onInput={event => setName(event.target.value)}
            />
        </div>
    )
}
export default NameInput
