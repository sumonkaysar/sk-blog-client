import bg from '../../images/bg/bg.jpg';
const Banner = () => {

  return (
    <div className='h-[600px] w-full bg-cover bg-no-repeat bg-center mb-10' style={{backgroundImage: `url(${bg})`}}>
      <div className='h-full bg-black bg-opacity-60' >

      </div>
    </div>
  );
}

export default Banner;
