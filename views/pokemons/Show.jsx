const React =require('react');
const Default = require('../layouts/Default.jsx')

class Show extends React.Component {

    render(){
        const {name, type, readyToFight, _id, image} = this.props.pokemon
        const capName = name[0].toUpperCase() + name.substring(1)
        return(
        <Default title={`${capName} Show Page`} pokemon={this.props.pokemon}>
            <p>{capName} is {type} and {readyToFight? 'it\'s ready to fight': 'it\'s not ready to fight'}</p>
            <div className="image">
                {image ? <img src={image}/> : ""}
            </div>
        </Default>
        )
   }
}

module.exports = Show
