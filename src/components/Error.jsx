import propTypes from "prop-types";
const Error = ({ children }) => {
  return (
    <div className=" bg-red-800 text-center p-3 mb-3 text-white font-bold uppercase rounded-md">
      {children}
    </div>
  );
};
Error.propTypes = {
  children: propTypes.node.isRequired,
};

export default Error;
