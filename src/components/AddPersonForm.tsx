import { useState } from "react";
import { person, UsePeopleSetValue, UsePeopleValue } from "../App";

const AddPersonForm = ({
  people,
  setPeople,
}: {
  people: UsePeopleValue;
  setPeople: UsePeopleSetValue;
}) => {
  const [personToAdd, setPersonToAdd] = useState<person>({
    name: "",
    age: "",
    note: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setPersonToAdd((prevPerson) => {
      // handle age value to convert or check if it is a number
      if (name === "age") {
        const convertedAge = parseInt(value);

        // if age is not a number, set it to empty string otherwise set it to the converted age
        if (isNaN(convertedAge)) {
          return {
            ...prevPerson,
            [name]: "",
          };
        } else {
          return {
            ...prevPerson,
            age: convertedAge,
          };
        }
        // handle all other values (name, note)
      } else {
        return {
          ...prevPerson,
          [name]: value,
        };
      }
    });
  };

  const submitForm = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setPeople([...people, personToAdd]);
    setPersonToAdd({
      name: "",
      age: "",
      note: "",
    });
  };

  return (
    <div>
      <h1>Add Person</h1>
      <div className="form">
        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
          value={personToAdd.name}
        ></input>
        <input
          name="age"
          placeholder="Age"
          onChange={handleChange}
          value={personToAdd.age}
        ></input>
        <textarea
          name="note"
          placeholder="Note"
          onChange={handleChange}
          value={personToAdd.note}
          rows={6}
        ></textarea>
        <button onClick={submitForm}>Add Person</button>
      </div>
    </div>
  );
};

export default AddPersonForm;
