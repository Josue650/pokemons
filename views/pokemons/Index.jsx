const React = require('react')
const Default = require('../layouts/Default.jsx')

class Index extends React.Component {
    render(){
        const {pokemons} = this.props
        return(
            <Default>
                <ul>
                    {
                        pokemons.map((pokemons) => {
                            const {name, type, readyToFight, _id} = pokemons
                            return(
                                <li key={_id}>
                                    <a href={`/pokemons/${_id}`}>
                                        {name}</a> is {type} type
                                    <br />
                                    {
                                        readyToFight?
                                        'It\'s ready to fight':
                                        'It\'s not ready to Fight'
                                    }
                                    <br />
                                    <form method="POST" action={`/pokemons/${_id}?_method=DELETE`}>
                                        <input type="submit" value={`Delete ${type} ${name}`} />
                                    </form>
                                </li>
                            )
                        })
                    }
                </ul>
            </Default>
        )
    }
}
module.exports = Index
