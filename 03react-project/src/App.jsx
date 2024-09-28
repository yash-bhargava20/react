import { useState, useCallback, useEffect } from "react";

const App = () => {
  const [length, setlength] = useState(0);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [Password, setPassword] = useState("");

  const PasswordGenerator = useCallback(() => {
    let pass = "";
    let str = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSdTtUuVvWwXxYyZz";
    if (number) str += "0123456789";
    if (character) str += "/*-+.!@#$%^&*(:<>,)_+~`=?;|}{]['";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, number, character]);
  useEffect(() => {
    PasswordGenerator();
  }, [length, number, character]);
  const copyPassword = () => {
    window.navigator.clipboard.writeText(Password);
  };

  return (
    <>
      <h1 className="text-center text-3xl">Password Generator</h1>
      <div className="max-w-md mx-auto px-4 py-3 my-8 bg-gray-400 rounded-lg shadow-md">
        <div className="flex overflow-hidden p-2 gap-1">
          <input
            type="text"
            value={Password}
            placeholder="Generated Password"
            readOnly
            className="py-1 px-2 rounded-lg w-full"
          ></input>
          <button
            onClick={copyPassword}
            className="outline-none text-white bg-orange-500 px-2 py-0.5 text-lg rounded-md hover:bg-orange-400 cursor-pointer"
          >
            Copy
          </button>
        </div>
        <div className="flex items-center justify-between m-2">
          <div className="flex gap-1 items-center">
            <input
              type="range"
              min={8}
              max={16}
              value={length}
              onChange={(e) => {
                setlength(e.target.value);
              }}
            ></input>
            <label>Length: {length}</label>
          </div>
          <div className="flex gap-1 items-center">
            <input
              type="checkbox"
              onChange={() => setNumber((prev) => !prev)}
            ></input>
            <label>Numbers</label>
          </div>
          <div className="flex gap-1 items-center">
            <input
              type="checkbox"
              onChange={() => setCharacter((prev) => !prev)}
            ></input>
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  );
};
export default App;
