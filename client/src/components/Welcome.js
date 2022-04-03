import { useState, useRef } from "react"
import LocalMultiForm from "./GameConfigForms/LocalMultiForm";
import CpuMultiForm from "./GameConfigForms/CpuMultiForm";

export default function Welcome() {
    const [localMulti, setLocalMulti] = useState(false);
    const [cpuMulti, setCpuMulti] = useState(false);

    const [value, setValue] = useState('');

    const localMultiRadio = useRef();
    const cpuRadio = useRef();

    const handleChange = (e) => {
        setValue(e.target.id);

        if (e.target.id === 'local-multi') {
            setLocalMulti(true);
            setCpuMulti(false);
        } else {
            setLocalMulti(false);
            setCpuMulti(true);
        }
    }

    const handleClear = () => {
        localMultiRadio.current.checked = false;
        cpuRadio.current.checked = false;

        setLocalMulti(false);
        setCpuMulti(false);
        setValue('');
    }

    return (
        <>
        <h1>Welcome to Splinter</h1>
        <h2>Compete with your friends to have the lowest<br/>possible amount of resources to your name!</h2>

        <h2>Choose from the options below:</h2>
        <form className="game-config">
            <div>
                <label htmlFor="local-multi">Local multiplayer?</label>
                <input name="game-group" id="local-multi" ref={localMultiRadio} type="radio" onChange={(e) => handleChange(e)}></input>
            </div>
            <div>
                <label htmlFor="cpu-multi">CPU multiplayer? (under construction)</label>
                <input name="game-group" id="cpu-multi" ref={cpuRadio} type="radio" onChange={(e) => handleChange(e)}></input>
            </div>
        </form>

        {localMulti ? <LocalMultiForm /> : null}
        {cpuMulti ? <CpuMultiForm /> : null}

        <button onClick={handleClear}>Clear form input</button>
        </>
    )
}