import "./App.css";
import PeopleList from "./components/PeopleList";
import AddPersonForm from "./components/AddPersonForm";
import { useState } from "react";

export interface person {
  name: string;
  age: number | "";
  note?: string;
}

function App() {
  const [people, setPeople] = useState<person[]>([
    {
      name: "John",
      age: 25,
      note: "Bringing drinks",
    },
    {
      name: "Cindy",
      age: 23,
      note: "Bringing snacks",
    },
  ]);

  return (
    <div className="App">
      <h1>People Invited to the Party</h1>
      <PeopleList people={people} />
      <AddPersonForm people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
