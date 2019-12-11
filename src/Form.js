import React, {Component} from "react";

class Form extends Component {

    handleSubmit = (e) => {
        let { madLib, updateWords } = this.props
        madLib[e.target.name] = e.target.value
        this.props.updateWords(madLib)
    }

    handleClick = () => {
        this.props.updateShowStory()
        console.log("this is working");
    }

    render(){

        let { madLib } = this.props

        return(
            <div>
                <label>
                    Past-tense verb:
                    <input name="verb" value={madLib.verb}
                    onChange={this.handleSubmit}
                    />
                </label>
                <label>
                    Location:
                    <input name="location" value={madLib.location}
                    onChange={this.handleSubmit}
                    />
                </label>
                <br/>
                <label>
                    Item:
                    <input name="item" value={madLib.item}
                    onChange={this.handleSubmit}
                    />
                </label>
                <label>
                    Clothing Item:
                    <input name="clothingItem" value={madLib.clothingItem}
                    onChange={this.handleSubmit}
                    />
                </label>
                <label>
                    Number:
                    <input name="number" value={madLib.number}
                    onChange={this.handleSubmit}
                    />
                </label>
                <label>
                    Adjective:
                    <input name="adjective" value={madLib.adjective}
                    onChange={this.handleSubmit}
                    />
                </label>
                <label>
                    Animal:
                    <input name="animal" value={madLib.animal}
                    onChange={this.handleSubmit}
                    />
                </label>
                <label>
                    Body Part:
                    <input name="bodyPart" value={madLib.bodyPart}
                    onChange={this.handleSubmit}
                    />
                </label>
                <label>
                    Number:
                    <input name="number2" value={madLib.number2}
                    onChange={this.handleSubmit}
                    />
                </label>
                <label>
                    Location:
                    <input name="location2" value={madLib.location2}
                    onChange={this.handleSubmit}
                    />
                </label>
                <label>
                    Activtiy ending in "-ing":
                    <input name="ingActivity" value={madLib.ingActivity}
                    onChange={this.handleSubmit}

                    />
                </label>

                <button onClick= {this.handleClick}>
                Submit
                </button>
            </div>
        )
    }
}


export default Form;
