import Contact from "../sections/Contact";

const Botton = ({name, isBeam = false , containerClass}) => {
  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };
  return (
    
    <button onClick={scrollToContact} className={`btn ${containerClass}`}>
      {
        isBeam && (
            <span className="relative flex h-3 w-3">
                <span className="btn-ping" />
                <span className="btn-ping_dot" />
            </span>
        )}
        {name}
    </button>
  )
}

export default Botton