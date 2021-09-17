const links = [
    {
      label: "Week1 notes",
      url: "week1/index.html"
    }
  ]

  const list = document.getElementById("ListOfLinks").innerHTML

  function populateList(){
     for(i = 0; i < links.length; i++){
         const li = document.createElement('li');
         li.innerHTML = links[i];
         list.appendChild(li);
     }
    }