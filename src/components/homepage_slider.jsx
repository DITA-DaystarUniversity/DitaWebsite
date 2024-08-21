import "/src/Css/homepage_slider.css";

function homepage_slider() {
      let numberofimages = 0;
      const content = document.querySelector(".content");
      // prevbtn.disabled =false

      function nextbtn() {
        numberofimages += 1
        if(numberofimages >= 8)
          {
            numberofimages = 0
          }
        const content = document.querySelector(".content");
        content.innerHTML = `
        <img src="/src/Images/Dita_ex/img${numberofimages}.jpg"></img>
        <img src="/src/Images/Dita_ex/img${numberofimages + 1}.jpg"></img>
        `
      };
      
      function prevbutton() {
        numberofimages -= 1
        if(numberofimages <= 0)
          {
            numberofimages = 7
          }
        const content = document.querySelector(".content");
        content.innerHTML = `
        <img src="/src/Images/Dita_ex/img${numberofimages}.jpg"></img>
        <img src="/src/Images/Dita_ex/img${numberofimages + 1}.jpg"></img>
        `
      };

    return (
      <div className="homepage_slider">
        <button className="prev" onClick={() => {
          prevbutton()
        }}>&lt;</button>
          <div className="content">
            <div className="exc_1">
              <img src="/src/Images/Dita_ex/img0.jpg"></img>
              <h2 className="exc_name">Prince Benedict</h2>
              <h3 className="exc_title">Dita President</h3>
              <p className="exc_description">Handsome in every aspect. The ladies man.</p>
            </div>
          </div>
        <button className="next" onClick={() => {
          nextbtn()
        } }>&gt;</button>
      </div>
    )

}






export default homepage_slider