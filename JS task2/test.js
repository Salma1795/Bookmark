var bookmarkNameInput = document.getElementById("bookmarkNameInput");
var websiteUrlInput = document.getElementById("websiteUrlInput");

var bookmarks ;

if(localStorage.getItem("ourBookmarks")==null){
    bookmarks=[];
}
else{
    bookmarks=JSON.parse( localStorage.getItem("ourBookmarks"));
    displayBookmark();
}

function addBookmarks() {
    var bookmark = {
        name: bookmarkNameInput.value,
        url: websiteUrlInput.value
    };
    bookmarks.push(bookmark);
    localStorage.setItem("ourBookmarks", JSON.stringify(bookmarks));
    displayBookmark();
    clearForm();
}



function displayBookmark() {
    var cartoona = "";
    for (var i = 0; i < bookmarks.length; i++) {
        cartoona += `<tr>
        <td>${bookmarks[i].name}</td>
        <td><button class="btn btn-danger">Visit</button></td>
        <td><button onclick="deleteBookmark(${i})" class="btn btn-primary">Delete</button></td>
        </tr>`;
    }
    document.getElementById("table-body").innerHTML = cartoona;
}

function clearForm(){
    bookmarkNameInput.value="";
    websiteUrlInput.value="";
}

function deleteBookmark(index){
    bookmarks.splice(index,1);
    localStorage.setItem("ourBookmarks",JSON.stringify(bookmarks));
    displayBookmark();
}

