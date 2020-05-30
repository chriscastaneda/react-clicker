import React, { useState } from 'react';
import './content.component.css';

const ContentComponent: React.FC = () => {
    /**input to manufacture */
    const [excavatorsInput, setExcavatorsInput] = useState(0);
    const [catapultsInput, setCatapultsInput] = useState(0);
    
     /**Output to inventory */
     const [excavators, setExcavators] = useState(0);
     const [catapults, setCatapults] = useState(0);

    /**Submit */
    const manufacture = () => {
        setExcavators(excavators + excavatorsInput);
        setCatapults(catapults + catapultsInput) ;
        setExcavatorsInput(0);
        setCatapultsInput(0);
    };

    return(
        <main id="content-component">
            <section id="inventory-container">
                <h2>inventory</h2>
                <ol>
                    <li>{excavators} Excavators</li>
                    <li>{catapults} Catapults</li>
                </ol>
            </section>



            <section id="manufacture-container">
                <h2>manufacture</h2>
                <form>
                    <fieldset>
                        <label>
                            Excavators:
                        <input value={excavatorsInput} onChange={(e) => setExcavatorsInput(Math.max(excavatorsInput, +e.target.value))} type="number"></input>
                        </label>
                    </fieldset>
                    <fieldset>
                        <label>
                            Catapults:
                            <input value={catapultsInput} onChange={(e) => setCatapultsInput(Math.max(catapultsInput, +e.target.value))} type="number"></input>
                        </label>
                    </fieldset>
                </form>
                <button onClick={ () => manufacture()}>submit</button>
            </section>
        </main>
    );
}

export default ContentComponent;