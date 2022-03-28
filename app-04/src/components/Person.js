export const Person = ({ data }) => {
  return (
    <div>
      <h2>{data.name}</h2>
      <p>{data.birth_year}</p>
      <p>{data.gender}</p>
    </div>
  );
};
