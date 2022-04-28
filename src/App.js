import "./App.css";
import DrumMachine from "./DrumMachine";

function App() {
  const keyButtons = [
    {
      letter: "Q",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
      id: "heater-1",
    },
    {
      letter: "W",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
      id: "heater-2",
    },
    {
      letter: "E",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
      id: "heater-3",
    },
    {
      letter: "A",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
      id: "kick-n-hat",
    },
    {
      letter: "S",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
      id: "chord-1",
    },
    {
      letter: "D",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
      id: "give-us-a-light",
    },
    {
      letter: "Z",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
      id: "dry-ohh",
    },
    {
      letter: "X",
      src: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
      id: "punchy-kick-1",
    },
    {
      letter: "C",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
      id: "brk-snr",
    },
  ];
  return (
    <div className="App">
      <DrumMachine keyButtons={keyButtons} />
    </div>
  );
}

export default App;
