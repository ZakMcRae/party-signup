import { person } from "../App";

const PeopleList = ({ people }: { people: person[] }) => {
  return (
    <div>
      <h1>People List</h1>
      {people.map((person, index) => (
        <PersonCard person={person} key={index} />
      ))}
    </div>
  );
};

const PersonCard = ({ person }: { person: person }) => {
  return (
    <div className="person">
      <img></img>
      <p>{person.name}</p>
      <p>{person.age}</p>
      <p>{person.note}</p>
    </div>
  );
};

export default PeopleList;
