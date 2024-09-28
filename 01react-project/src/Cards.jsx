import PropTypes from "prop-types";
const Cards = (props) => {
  return (
    <>
      <div className="w-[300px]  mt-5 rounded-md border ">
        <img
          src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
          className="w-full object-cover h-[200px] rounded-t-md"
        />
        <div className="p-4">
          <h1 className="font-semibold text-2xl">{props.name}</h1>

          <div className="mt-3"></div>
          <span className="inline-block rounded-full bg-gray-100  font-medium text-base px-2 py-1 ">
            #{props.occupation}
          </span>

          <p className="mt-3 text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere sed
            corrupti asperiores repellat officiis corporis tempore, neque
            dolorum quis voluptatibus eius quae a quod sequi. Architecto
            aspernatur assumenda sunt aliquid.
          </p>
          <button
            type="button"
            className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Read
          </button>
        </div>
      </div>
    </>
  );
};
Cards.propTypes = {
  name: PropTypes.string,
  occupation: PropTypes.string,
};
Cards.defaultProps = {
  name: "Guest",
  occupation: "not known",
};

export default Cards;
