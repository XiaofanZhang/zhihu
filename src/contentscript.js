chrome.runtime.sendMessage({method: "getUsers"}, callBack);
// add onload event handler for comments ( and new answers)
// as comments are only loaded when click

function callBack(res){
    var links = new Set(); 
    for (var x in res)
        links.add(res[x]);
    console.log(links);
    var comments = document.getElementsByClassName('zm-item-comment');
    console.log(comments.length);
    for (i = 0; i < comments.length; i++) {
        var link = comments[i].getElementsByTagName('a')[1].href;
        console.log(link);
        if (links.has(link)) {
            comments[i].style.display = 'none';
        }
    }
}

function blockComment(links){
    var ans = document.getElementsByClassName('zm-item-answer');
    for (i = 0; i < ans.length; i++) {
        var author = ans[i].getElementsByClassName('zm-item-answer-author-info')[0];
        var link = author.getElementsByTagName('a')[0].href;
        console.log(link);
        if (links.has(link)) {
            ans[i].style.display = 'none';
        }
    }
}

