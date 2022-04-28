import "./App.css";
import PeopleList from "./components/PeopleList";
import AddPersonForm from "./components/AddPersonForm";
import { useState } from "react";

export interface person {
  name: string;
  age: number | "";
  note?: string;
}

const usePeople = (initialPeople: person[]) =>
  useState<person[]>(initialPeople);

export type UsePeopleValue = ReturnType<typeof usePeople>[0];
export type UsePeopleSetValue = ReturnType<typeof usePeople>[1];

function App() {
  const [people, setPeople] = usePeople([
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
