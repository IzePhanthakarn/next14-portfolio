import "./style.css";

const Loader = () => {
  return (
    <section className="bg-background-secondary h-screen flex items-center justify-center relative">
      <div className="spinner absolute w-60 h-60 sm:w-72 sm:h-72 rounded-full">
        <div className="spinner1 w-60 h-60 sm:w-72 sm:h-72 rounded-full" />
      </div>
      <div className="glitch text-xl sm:text-3xl" data-glitch="Loading...">
        Loading...
      </div>
    </section>
  );
};

export default Loader;
