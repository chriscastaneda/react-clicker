import React, { useState } from 'react';
import './content.component.css';

const ContentComponent: React.FC = () => {
    const [excavators, setExcavators] = useState(0);
    const [Catapults, setCatapults] = useState(0);
    
    return(
        <main id="content-component">
            <section id="inventory-container">
                <h2>inventory</h2>
                <ol>
                    <li>{excavators} Excavators</li>
                    <li># Catapults</li>
                </ol>
            </section>
            <section id="manufacture-container">
                <h2>manufacture</h2>
                <form>
                    <fieldset>
                        <label>
                            Excavators:
                        <input type="number"></input>
                        </label>
                    </fieldset>
                    <fieldset>
                        <label>
                            Catapults:
                            <input type="number"></input>
                        </label>
                    </fieldset>

                    <input type="submit"></input>
                </form>
            </section>
        </main>
    );
}

export default ContentComponent;