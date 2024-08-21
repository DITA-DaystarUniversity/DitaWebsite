const nextbtn = document.querySelector(".next");
const prevbtn = document.querySelector(".prev");
const content = document.querySelector(".content");

let numberofimages = 0;
prevbtn.disabled =false

nextbtn.addEventListener("click", () => {
  numberofimages += 1
  if(numberofimages < 5)
    {
      content.innerHTML = `<Image src="Images/img${numberofimages}.jpg" alt="image"></Image>
      <Image src="Images/img${numberofimages + 1}.jpg" alt="image"></Image>
`;
    }else if(numberofimages > 5)
      {
         nextbtn.disabled = true
         prevbtn.disabled =false
      }
    else
    {
      numberofimages=0
      content.innerHTML = `<Image src="Images/img${numberofimages}.jpg" alt="image"></Image>
      <Image src="Images/img${numberofimages + 1}.jpg" alt="image"></Image>`;
    }

});

prevbtn.addEventListener("click", () => {
  numberofimages -= 1
  if(numberofimages > 0)
    {
      content.innerHTML = `<Image src="Images/img${numberofimages}.jpg" alt="image"></Image>
      <Image src="Images/img${numberofimages - 1}.jpg" alt="image"></Image>
`;
    }else if(numberofimages < 0)
      {
         prevbtn.disabled = true
      }
    else
    {
      numberofimages = 5
      content.innerHTML = `<Image src="Images/img${numberofimages}.jpg" alt="image"></Image>
      <Image src="Images/img${numberofimages - 1}.jpg" alt="image"></Image>
`;
      prevbtn.disabled =false
    }


  console.log(numberofimages);
});