import React from 'react'
import ReactDOM from 'react-dom'
import Button from './Button'
import ComponentA from './ComponenteA'
import ComponentB from './ComponenteB'
import './styles'

function soma(a, b) {
    alert(a + b)
}

function App() {
    return {
        // <div className='App'>
        //     Hello World
        //     <Button onClick={() => soma(10, 20)} name='Alessandra Luisi' />
        //     <ComponentA>
        //         <ComponentB>
        //             <Button onClick={() => soma(40, 20)} name='Bruno Carneiro' />
        //         </ComponentB>
        //     </ComponentA>
        // </div>
    }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement)