import { useState } from "react";

export default function App() {
  return (
    <>
      <div>
        <MileCalculator />
      </div>
      <div>
        <FtoC />
      </div>
    </>
  );
}

function MileCalculator() {
  const [mile, setMile] = useState("");
  const [kilometer, setKilometer] = useState("");

  const convertedValue = Math.round(mile * 1.609344);

  return (
    <div>
      <MileInput mile={mile} onSetMile={setMile} />
      <KilometerInput
        kilometer={kilometer}
        onSetKilometer={setKilometer}
        convertedValue={convertedValue}
      />
    </div>
  );
}

function MileInput({ mile, onSetMile }) {
  return (
    <div>
      <label>What is the mile do you want convert?</label>
      <input
        type="text"
        placeholder="mile"
        value={mile}
        onChange={(e) => onSetMile(Number(e.target.value))}
      />
    </div>
  );
}

function KilometerInput({ convertedValue }) {
  return (
    <div>
      <label>Kilometer value</label>
      <input type="text" value={convertedValue} disabled />
    </div>
  );
}

function FtoC() {
  const [celcius, setCelcius] = useState("");

  const convertedF = Math.round(1.8 * celcius + 32);

  return (
    <div>
      <CelciusInput celcius={celcius} onSetCelcius={setCelcius} />
      <FahrenheitInput convertedF={convertedF} />
    </div>
  );
}

function CelciusInput({ celcius, onSetCelcius }) {
  return (
    <div>
      <label>Please write celcius degree that you want to convert F</label>
      <input
        type="text"
        placeholder="celcius"
        value={celcius}
        onChange={(e) => onSetCelcius(Number(e.target.value))}
      />
    </div>
  );
}

function FahrenheitInput({ convertedF }) {
  return (
    <div>
      <label>Fahrenheit degree is</label>
      <input type="text" disabled value={convertedF} />
    </div>
  );
}
