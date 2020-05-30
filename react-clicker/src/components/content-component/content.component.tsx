import React, { useState } from 'react';


const ContentComponent: React.FC = ()=> {
    const [counter, setCounter] = useState(0);
    
    const math = ()=> {
        let color = setCounter(counter + 1);
    };

    return(
        <main>
            <section>
                <h2>{counter}</h2>
            </section>
            
            <button onClick={math}>submit</button>
        </main>
    );
};

export default ContentComponent;