import Wrapper from "./Wrapper";

function Description({ description }) {
  return (
    <Wrapper className="laptop:col-span-2">
      <h2 className="p">Description</h2>
      <p className="mt-2 laptop:mt-2.5 font-medium! text-absolute-white!">
        {description
          ? description
          : "A fiery young man clashes with an unflinching forest officer in a south Indian village where spirituality, fate and folklore rule the lands."}
      </p>
    </Wrapper>
  );
}

export default Description;
