// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

function filter(filter){
    console.log("its clicked ", list.children.length, " ", list.children);
    var filterName = document.getElementById("filterName");
    switch(filter){
        case 'All':
            for (i = 0; i < list.children.length; i++) {
                list.children[i].style.display = "";
                }
                console.log("clicked All");
                 filterName.innerHTML = "All";
            break;
        case 'Active':
            for (i = 0; i < list.children.length; i++) {
                list.children[i].style.display = "";
                if(list.children[i].classList.contains("checked")){
                    list.children[i].style.display = "none";
                }
            }
            console.log("clicked Active");
            filterName.innerHTML = "Active";
            break;
        case 'Completed':
            for (i = 0; i < list.children.length; i++) {
                list.children[i].style.display = "none";
                if(list.children[i].classList.contains("checked")){
                    list.children[i].style.display = "";
                }
              }
              console.log("clicked Completed");
              filterName.innerHTML = "Completed";
            break;
        default:
            for (i = 0; i < list.children.length; i++) {
                list.children[i].parentElement.style.display = "";
            }
            console.log("Why");
            filterName.innerHTML = "None";
            break;
    }
}

// get number of li in the ul
function getlistLength() {
    var listLength = document.getElementById("itemsNum");
    listLength.innerHTML= list.children.length;
}
getlistLength();

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.remove();
    getlistLength();
  }
}

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You may not add empty tasks!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.remove();
    }
  }
  getlistLength();
}