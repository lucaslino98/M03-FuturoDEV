import { useState, useEffect } from 'react';

function Counter() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Contador: ${count}`;
    }, [count]);

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Contador: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Incrementar</button>
            <button onClick={() => setCount(count - 1)} style={{ marginLeft: '10px' }}>Decrementar</button>
        </div>
    );
}

export default Counter;