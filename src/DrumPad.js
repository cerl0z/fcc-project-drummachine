import React from "react";
import "./DrumPad.css";
class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      play: false,
      pause: true,
    };
    this.buttonRef = React.createRef();
    this.handleClick = this.handleClick.bind(this);
    // this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    this.buttonRef.current.focus();
  }
  handleClick = () => {
    console.log(`${this.props.letter} was clicked`);
    // this.audio = new Audio(this.props.src);
    const displayText = document.getElementById("display");
    displayText.innerText = this.props.id;
    try {
      document.getElementById(this.props.letter).play();
    } catch (err) {
      console.log(err);
    }
    // if (this.state.play === false && this.state.pause === true) {
    //   this.setState({
    //     play: true,
    //     pause: false,
    //   });
    //   this.audio.play();
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
    // }
  };

  // handleKeyDown = (e) => {
  //   console.log(`${e.key} pressed in child`);
  //   this.audio = new Audio(this.props.src);
  //   if (this.state.play === false && this.state.pause === true) {
  //     this.setState({
  //       play: true,
  //       pause: false,
  //     });
  //     this.audio.play();
  //   } else if (this.state.play === true && this.state.pause === false) {
  //     this.setState({
  //       play: false,
  //       pause: true,
  //     });
  //     this.audio.pause();
  //   }
  // };
  render() {
    return (
      <div
        tabIndex="0"
        // className="pad-area"
        className="drum-pad"
        ref={this.buttonRef}
        id={this.props.id}
        onClick={this.handleClick}
        value={this.props.letter}
      >
        {/* <button
          className="drum-pad"
        
        > */}
        {this.props.letter}
        <audio id={this.props.letter} className="clip" src={this.props.src}>
          {/* <source src={this.props.src} type="audio/mpeg" /> */}
        </audio>
        {/* </button> */}
      </div>
    );
  }
}

export default DrumPad;
