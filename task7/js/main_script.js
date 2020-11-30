var duplicate = document.getElementById("dublicate");
var validName = document.getElementById("name-valid");
var validUrl = document.getElementById("url-valid");

var Name = document.getElementById("bookMarkName");
var Url = document.getElementById("bookMarkUrl");
var searchList ;

if (localStorage.getItem("bookMarks") == null) {
  searchList = [];
  
}
else {
  searchList = JSON.parse(localStorage.getItem("bookMarks"));
  displaymarks();

}



function clearForm() {
Name.value = "";
Url.value = "";

}
function validateInput() {
  if (Name.value == "") {
    if (Url.value == "") {
      validName.classList.add("my-style");
      validUrl.classList.add("my-style");

    }


    else {
      var name = document.getElementById("name-valid");
      name.classList.add("my-style");
    }
  }
  else if (Url.value == "") {
    validName.classList.remove("my-style");

        var url = document.getElementById("url-valid");
        url.classList.add("my-style");
      
    }

    else {


    return true;

    }
   
}
function searchInList() {
  for (var i = 0; i < searchList.length; i++) {
    if (Name.value == searchList[i].markName && (Url.value== searchList[i].markUrl)) {
   
      duplicate.classList.add("my-style");
return false 
    }
  }
  return true;
}

function addmark() {
  debugger;
if (validateInput()==true)
{
 if (searchInList()==true){
  duplicate.classList.remove("my-style");

  validName.classList.remove("my-style");

  validUrl.classList.remove("my-style");

  var markSite =
  {
   
    markName: Name.value,
    markUrl: Url.value
  }
  searchList.push(markSite);

  localStorage.setItem("bookMarks", JSON.stringify(searchList));
 displaymarks();
 clearForm();



}}
}

function displaymarks() {
  
  var container = "";
  for (var index = 0; index < searchList.length; index++) {
    container += `
  <div class ="sec-bg">
  <div class="row  px-4 align-items-center my-4" >
  <div class="col-md-5">
  <h4 class="p-3 ">`+ searchList[index].markName + `</h4>
   </div>
  <div class="col-md-5" id="buttons">
    <a class="btn btn-primary" role="button" href="`+ searchList[index].markUrl + `"> Visit</a>
   <button  class="btn btn-danger" onClick="deletBookmark(`+ index + `)"> Delet
   </button>
   <button  class="btn btn-warning " onClick="displayNewForm(`+ index + `)"> update
   </button>
  </div></div></div>
  <div id=`+index+ `></div>`;
  }
  document.getElementById("result").innerHTML = container;

}

function displayNewForm(x){
  document.getElementById(x).innerHTML =`
  <input class="form-control d-inline-block w-25 ml-3" placeholder="rewrite new name" id="new-name">
  <input class="form-control ml-3 d-inline-block w-25" placeholder="rewrite new Url" id="new-url">
  <button class="btn btn-primary " onclick=" update(`+x+`) ">update</button>`
  
}

function update (e){

 searchList[e]={
 markName: searchList[e].markName.replace(searchList[e].markName,document.getElementById("new-name").value),
  markUrl:searchList[e].markUrl.replace(searchList[e].markUrl,document.getElementById("new-url").value)
 }

  localStorage.setItem("bookMarks", JSON.stringify(searchList));
  displaymarks();

}




function deletBookmark(e) {
  searchList.splice(e, 1);
 
 localStorage.setItem("bookMarks",JSON.stringify(searchList));
 displaymarks();
}







