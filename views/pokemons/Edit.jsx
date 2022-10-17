const React = require('react')
const Default = require('../layouts/Default.jsx')

class Edit extends React.Component {
    render(){
        const {name, _id, type, readyToFight} = this.props.pokemon
        return(
            <Default title={`${name} Edit Page`} pokemon={this.props.pokemon}>
            <form method="POST" action={`/pokemons/${_id}?_method=PUT`}>
                Name: <input type="text" name="name" defaultValue={name}></input><br/>
                Type: <input type="text" name="type" defaultValue={type}></input><br />
                Is Ready To Fight: <input type="checkbox" name="readyToEat" defaultChecked={readyToFight}/> <br />
                <input type="submit" value="Edit Pokemon" />
            </form>

            </Default>
        )
    }
}
module.exports = Edit
