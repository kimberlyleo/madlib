import React, { Component } from 'react';
import './App.css';
import Form from "./Form.js"
import Story from "./Story.js";


class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            madLib: {
                verb: "",
                location: "",
                item: "",
                clothingItem: "",
                number: "",
                adjective: "",
                animal: "",
                bodyPart: "",
                number2: "",
                location2: "",
                ingActivity: ""
            },
            showStory: false,
        }
    }

    updateWords = (madLib) => {
        this.setState({
            madLib: madLib
        })
    }

    updateShowStory = () => {
        this.setState({showStory: true})
    }

    resetForm = () => {
        this.setState({
            showStory: false,
            madLib: {
                verb: "",
                location: "",
                item: "",
                clothingItem: "",
                number: "",
                adjective: "",
                animal: "",
                bodyPart: "",
                number2: "",
                location2: "",
                ingActivity: ""
        }})
    }

    render() {
        return (
            <div id="componentView">
                <div id = "form">
                    <Form
                    updateWords={this.updateWords}
                    updateShowStory={this.updateShowStory}
                    madLib={this.state.madLib} />
                </div>
                <div id="story">
                    {this.state.showStory === true ? <Story state={this.state} resetForm={this.resetForm} />
                    : <div>
                        <h1>your story awaits...</h1>
                        <img id="clown" src="https://cdn.pixabay.com/photo/2012/04/14/13/25/clown-33919_1280.png" />
                    </div>}

                </div>
            </div>
        )
    }
}

export default App;
