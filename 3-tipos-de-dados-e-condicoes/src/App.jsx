import React from "react";

const listCustomer = [
    {
        id: 1,
        nome: 'Alessandra Luisi',
        skills: ['JS', 'HTML', 'CSS', 'React', 'Node']
    },
    {
        id: 2,
        nome: 'Bruno Carneiro',
        skills: ['React', 'Node', 'CSS', 'Webpack']
    },
    {
        id: 3,
        nome: 'Aline Gomes',
        skills: ['Kotlin']
    },
    {
        id: 4,
        nome: 'Greg Tolentino',
        skills: ['Comer', 'Dormir', 'Roncar']
    }
]

const App = () => {

    const renderSkills = (skill, index) => {
        return (
            <div style={{ paddingLeft: '30px' }} key={`skill-${index}`}>
                <li>{skill}</li>
            </div>
        )
    }

    const renderCustomers = (customer, index) => {
        return (
            <div key={/*index*/`customer-${customer.id}`}>
                <li>{customer.nome}</li>
                {customer.skills.map(renderSkills)}
            </div>
        )
    }

    return (
        <div>
            <p>Didital Innovation One</p>
            <p>Bem vindo a nossa aula =D</p>
            <div>
                <ul>
                    {listCustomer.map(renderCustomers)}
                </ul>
            </div>
        </div>
    )
};
export default App;