import imeg from '../images/image.jpg';

const listNames=["Ahmed","Ayaan","Bushra"];
const randomNames=(value)=>{
    return Math.floor(Math.random() *(value+1));
};

function Card() {
    const results=listNames[randomNames(4)];
  return (
    <div className='card'>
        <img className='img'  src={imeg} alt="ayaa image" />
        <h3>{results},programming is fun indeed</h3>
            <h6> Every Body Should Learn How To Code...! </h6>
            <p> 'programming can be a lot of fun! It's a creative process that involves 
            solving problems, bringing ideas to life, and continuously learning new things'</p>


    </div>
  );
};

export default Card