'use strict'
let hoster = "https://res.cloudinary.com/lmru/image/upload/LMCode/" //number.jpg

launch.addEventListener("click", ()=>{
  //erase all previous images if box is checked
  if(!rmimg.checked)
    imagecont.innerHTML = "";
  //format the url list
  txtList.value = txtList.value.replaceAll(' ', '\n')
  let URLs = txtList.value.split("\n");
  //process each url
  for(let urli = 0; urli < URLs.length; urli++){
    //find the product id number
    let URL = URLs[urli];
    //check if url is just empty
    if(URL==" " || URL =="") continue;
    let number = "";
    let resetflag = false;
    for(let find = 0; find < URL.length; find++){ //get last number in url
      if((URL[find] >= '0')&&(URL[find] <= '9')){
        if(resetflag){
          resetflag = false;
          number = "";
        }
        number = number + URL[find]
      }
      else
        resetflag = true;
    }
    //create the product group
    //title
    let lnewElem = document.createElement('a');
    lnewElem.href = URL;
    lnewElem.innerHTML = URL;
    lnewElem.classList.add("groupTitle");
    imagecont.append(lnewElem);
    imagecont.append(document.createElement('br')); //line break
    //images
    for(let i = 0; i < maxpics.value; i++){  
      let newElem = document.createElement('img');
      newElem.classList.add("imageSmaller");
      let post = "";
      if(i>0)post="_0"+i; //find variations
      //choose type in a very EXTENDIBLE and DEBUGGABLE way
      let type = "";
      if (radpng.checked) type = ".png";
      if (radjpg.checked) type = ".jpg";
      if (radwebp.checked) type = ".webp";
      if (radbmp.checked) type = ".bmp";
      if (radgif.checked) type = ".gif";
      //form image url
      newElem.src = hoster + number +post+ type;
      //check if image exists
      newElem.onerror = ()=>{
        newElem.remove();
      }
      imagecont.append(newElem);
    }
    //tmp images (kill meeeee)
    for(let i = 0; i < maxpics.value; i++){  
      let newElem = document.createElement('img');
      newElem.classList.add("imageSmaller");
      let post = "";
      if(i>0)post="_0"+i; //find variations
      //choose type in a very EXTENDIBLE and DEBUGGABLE way
      let type = "";
      if (radpng.checked) type = ".png";
      if (radjpg.checked) type = ".jpg";
      if (radwebp.checked) type = ".webp";
      if (radbmp.checked) type = ".bmp";
      if (radgif.checked) type = ".gif";
      //form image url
      newElem.src = hoster + number + "_tmp" + post+ type;
      //check if image exists
      newElem.onerror = ()=>{
        newElem.remove();
      }
      imagecont.append(newElem);
    }
    //images (interier) ((very elegant))
    for(let i = 0; i < maxpicsi.value; i++){  
      let newElem = document.createElement('img');
      newElem.classList.add("imageSmaller");
      let post = "";
      if(i>0)post="_0"+i; //find variations
      //choose type in a very EXTENDIBLE and DEBUGGABLE way
      let type = "";
      if (radpng.checked) type = ".png";
      if (radjpg.checked) type = ".jpg";
      if (radwebp.checked) type = ".webp";
      if (radbmp.checked) type = ".bmp";
      if (radgif.checked) type = ".gif";
      //form image url
      newElem.src = hoster + number + "_i" + post+ type;
      //check if image exists
      newElem.onerror = ()=>{
        newElem.remove();
      }
      imagecont.append(newElem);
    }
    imagecont.append(document.createElement('hr')); //horizontal line
  }
});

/*    complex html loader
launch.addEventListener("click", ()=>{
  let xhr = new XMLHttpRequest();
  xhr.addEventListener("readystatechange", ()=>{
    if((xhr.readyState == 4)&&(xhr.status == 200)){
      let outputdoc = xhr.responseText;
      findImages(outputdoc);
    }
  });
  xhr.open("GET", "https://res.cloudinary.com/lmru/image/upload/f_auto,q_90,w_2000,h_2000,c_pad,b_white,d_photoiscoming.png/LMCode/82206344.jpg", true);
  xhr.send();
});*/