import React from "react";

const buttonA = <button>Histórico dos Clientes</button>;
const buttonB = <button>Cadastrar Cliente</button>;
const hasCustomer = true;

const App = () => {
    const renderShowHistory = () => (
        <div>
            Clique no botão abaixo para visualizar o histórico dos clientes
            <br />
            {buttonA}
        </div>
    )

    const renderAddCustomer = () => (
        <div>
            Clique no botão abaixo para cadastrar o cliente
            <br />
            {buttonB}
        </div>
    )

    const showCustomer = () => {
        if (!hasCustomer) return null

        return (
            <div>
                <h1>Nome do Cliente: Alessandra Luisi</h1>
            </div>
        )
    }

    return (
        <div>
            <p>Didital Innovation One</p>
            <p>Bem vindo a nossa aula =D</p>
            {/* {hasCustomer && (
                <div>
                    Clique no botão abaixo para visualizar o histórico dos clientes
                    <br />
                    {buttonA}
                </div>
            )} */}
            {hasCustomer ? renderShowHistory() : renderAddCustomer()}
            <div>
                {showCustomer()}
            </div>
        </div>
    )
};
export default App;