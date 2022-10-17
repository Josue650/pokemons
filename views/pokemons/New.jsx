const React = require('react')
const Default = require('../layouts/Default.jsx')

class New extends React.Component {
    render(){
        return (
            <Default title='Create New Pokemon'>
            <form method="POST" action="/pokemons">
                Name: <input type="text" name="name" ></input><br/>
                Type: <input type="text" name="type" ></input><br/>
                Is Ready To Fight: <input type="checkbox" name="readyToFight"></input><br/>
                <input type="submit" value="Submit Pokemon"></input>
            </form>
            </Default>
        )
    }
}

module.exports = New
