const Hero = () => {
    return (
      <div className="flex justify-center items-center h-screen bg-cover bg-no-repeat bg-center py-5" style={{ backgroundImage: 'url(/BG.svg)' }}>
        <button className="bg-custom-yellow text-chocolate font-mono  font-bold py-2 px-5 mt-90 rounded focus:outline-none focus:shadow-outline">
          See Details
        </button>
      </div>
    )
  }
  
  export default Hero;
  