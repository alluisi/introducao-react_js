import React from "react";

const App = () => {

    const name = 'Digital Innovation One';

    const showEvent = (event) => {
        console.log('evento clicado');
        console.log(event);
        alert(name);
    }
    const Button = <button onClick={showEvent}>Mostrar Evento</button>

    const handleChange = (event) => {
        const { value } = event.target;
        console.log(value);
    }

    return (
        <div>
            <p>Didital Innovation One</p>
            <p>Bem vindo a nossa aula =D</p>
            <input onChange={handleChange} />
            {Button}
        </div>
    )
};
export default App;