import Layout from "/src/layout/homepage_layout.jsx";
import "/src/Css/hackathon.css";
import PropagateLoader from "react-spinners/PropagateLoader";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function awards() {
  return (
    <Layout>
      <div>
        <h1 className="Event__page_title">Awards</h1>
        <hr />
         <div className="hackathon" >
         <DotLottieReact
                          src="https://lottie.host/08238f7a-4b5d-4237-ac9d-bb298c0f2db0/mIwHBP3n1v.lottie"
                          loop
                          autoplay
                          style={{ width: '500px', height: '500px' }}
                        />
                        <p>No awards to display</p>
         </div>
      </div>
    </Layout>
  );
}

export default awards;
