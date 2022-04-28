import React from "react";
import DrumPad from "./DrumPad";
import "./DrumMachine.css";

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      play: false,
      pause: true,
      keyTriggered: "",
      clip: "",
    };

    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    if (e.target.value) {
      const clicked = this.props.keyButtons.filter((button) => {
        console.log(
          `click check: ${
            button.letter.toUpperCase() === e.target.value.toUpperCase()
          }`
        );
        return button.letter.toUpperCase() === e.target.value.toUpperCase();
      });

      if (clicked[0]) {
        this.setState({
          keyTriggered: clicked[0].letter,
          clip: clicked[0].id,
        });
      } else {
        return;
      }
    }
  }

  handleKeyDown = (e) => {
    console.log(`${e.key} pressed in child`);
    const pressed = this.props.keyButtons.filter((button) => {
      console.log(button.letter.toUpperCase() === e.key.toUpperCase());

      return button.letter.toUpperCase() === e.key.toUpperCase();
    });
    if (pressed[0]) {
      console.log(pressed);

      console.log(`key pressed in machine ${pressed[0].letter}`);
      this.setState({ keyTriggered: pressed[0].letter, clip: pressed[0].id });
      const displayText = document.getElementById("display");
      displayText.innerText = pressed[0].id;
      // this.audio = new Audio(pressed[0].src);
      try {
        document.getElementById(pressed[0].letter).play();
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log("invalid key");
      return;
    }
    // if (this.state.play === false && this.state.pause === true) {
    //   this.setState({
    //     play: true,
    //     pause: false,
    //   });
    //   this.audio.play();
    //   console.log(
    //     `state after play: {play:${this.state.play} pause:${this.state.pause}}`
    //   );
    //   this.setState({
    //     play: false,
    //     pause: true,
    //   });
    // }
    // if (this.state.play === true && this.state.pause === false) {
    //   this.setState({
    //     play: false,
    //     pause: true,
    //   });
    //   this.audio.pause();
    //   console.log(
    //     `state after pause: {play:${this.state.play} pause:${this.state.pause}}`
    //   );
    // }
  };
  render() {
    return (
      <div id="drum-machine" className="container">
        <h1>Drum Machine</h1>
        <div id="display">{this.state.clip}</div>
        <div
          id="pad-display"
          className="machine"
          onKeyDown={this.handleKeyDown}
          onClick={this.handleClick}
        >
          {this.props.keyButtons.map((button) => {
            return (
              <DrumPad
                key={button.id}
                letter={button.letter}
                src={button.src}
                id={button.id}
              />
            );
          })}
        </div>
        {/* <DrumPad
            id="heater-1"
            letter="Q"
            src={"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"}
          ></DrumPad>
          <DrumPad
            id="heater-2"
            letter="W"
            src={"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"}
          ></DrumPad>
          <DrumPad
            id="heater-3"
            letter="E"
            src={"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"}
          ></DrumPad>
          <DrumPad
            id="kick"
            letter="A"
            src={"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"}
          ></DrumPad>
          <DrumPad
            id="chord-1"
            letter="S"
            src={"https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"}
          ></DrumPad>
          <DrumPad
            id="give-us-a-light"
            letter="D"
            src={
              "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"
            }
          ></DrumPad>
          <DrumPad
            id="dry"
            letter="Z"
            src={"https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"}
          ></DrumPad>
          <DrumPad
            id="punchy-kick"
            letter="X"
            src={
              "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"
            }
          ></DrumPad>
          <DrumPad
            id="brk-snr"
            letter="C"
            src={"https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"}
          ></DrumPad> */}
      </div>
    );
  }
}
export default DrumMachine;
