import React, { Component } from 'react';

class Story extends Component {
    render(){
        let { verb, location, item, clothingItem, number, adjective, animal, bodyPart, number2, location2, ingActivity } = this.props.state.madLib

        return(
            <>
                <p><strong>Florida man</strong> {verb} into a {location} carrying {"aeiou".includes(item.charAt(0)) ? "an" : "a"} {item}. He was wearing a {clothingItem} that was {number} sizes too large for his {adjective} body. His pet {animal} bit a baby on the {bodyPart}. He is now serving {number2} years at the local {location2} where he enjoys {ingActivity} in his free time.</p>
                <button onClick={this.props.resetForm}>Reset the story!</button>
            </>
        )
    }
}

export default Story;



{/*<p>Florida man {verb}ed into a {location} carrying a(n) {item}. He was wearing a {clothingItem} that was {number} sizes too large for his {adjective} body. His pet {animal} bit a baby on the {bodyPart}. He is now serving {number2} years at the local {location2} where he enjoys {ingActivity} in his free time.</p>*/}
