var msg = {}; 
chrome.storage.local.get('users', function(item){
    var data = item['users'];
    msg = toObject(data);
    console.log(msg);
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.method == "getUsers"){
       sendResponse(msg);
    }
    else{
        console.log("wtf");
        sendResponse(); // snub them.
    }
});


function toObject(arr){
    var rv = {};
    if (arr.length == 0){
        return rv;
    }
    for(j = 0; j < arr[1].length; j++){
        rv[j] = arr[1][j];
    }
    return rv;
}
