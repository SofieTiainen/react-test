import { useState } from "react";

const Movies = () => {
    const [orangeBackgroundColor, setOrangeBackGroundColor] = useState(false);
    const [disabledMode, setDisabledMode] = useState(false)

    const handleBackgroundColor = () => {
        setOrangeBackGroundColor(true)
        // setOrangeBackGroundColor((prevIsOrangeBackground) => !prevIsOrangeBackground);
    }

    const handleDisable = () => {
        setDisabledMode((prevDisabledMode) => !prevDisabledMode);
        console.log("hje")
    }

    return (
        <div>
            <h1>Populära filmer</h1>
            <button disabled={disabledMode} style={{ backgroundColor: orangeBackgroundColor ? 'orange' : 'red' }} onClick={handleBackgroundColor}>Gör till favorit</button>
            <label htmlFor="disable-button">Avaktivera favoritknappen</label>
            <input onClick={handleDisable} type="checkbox" id="disable-button"/>
        </div>
    )
}
export default Movies

