import { useLocation } from "react-router-dom";
import Layout from "/src/layout/homepage_layout.jsx";
import "/src/Css/SingleWriting.css"

function singleWriting() 
{
  const location = useLocation();
  const { name, img, topic, description, backgroundImage } = location.state;
  return (
    <Layout>
    <div className="singleWriting" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9)),url(${backgroundImage})`, backgroundRepeat: 'no-repeat' }}>
        <img src={img} alt={name} />
        <h2>{name}</h2>
    </div>
      <hr style={{ width: '98%' }} />
      <h1 className="singleWriting_topic" >{topic}</h1>
      <p style={{ marginLeft: '15px', fontSize: '23px' }}>{description}</p>
    </Layout>
  );
}

export default singleWriting;