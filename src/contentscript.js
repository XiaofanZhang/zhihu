var links = new Set(); 
// load all block users
chrome.runtime.sendMessage({method: "getUsers"}, function (res){
    for (var x in res)
        links.add(res[x]);
    console.log(links);
    
    // only answers are loaded now
    var ans = document.getElementsByClassName('zm-item-answer');
    blockAnswer(ans);
});


// add onchange event handler for comments ( and new answers)
// as comments are only loaded when click
var observerSummary = new MutationSummary({ 
    callback: handleSummary, 
    queries: [
        {element: "div.zm-item-comment"},       // comments
        {element: "div.zm-item-answer"},        // new answers
        {element: "div.zm-noti7-content-item"}    // message
    ]
});

function handleSummary(summaries){
    blockComment(summaries[0].added);
    blockAnswer(summaries[1].added);
    blockMsg(summaries[2].added);
}

function blockAnswer(ans){
    console.log(ans);
    for (i = 0; i < ans.length; i++) {
        var author = ans[i].getElementsByClassName('zm-item-answer-author-info')[0];
        var link = author.getElementsByTagName('a')[0].href;
        if (links.has(link)) {
            console.log(link);
            ans[i].style.display = 'none';
        }
    }
}

function blockComment(comments){
    console.log(comments);
    for (i = 0; i < comments.length; i++) {
        var link = comments[i].getElementsByTagName('a')[1].href;
        if (links.has(link)) {
            console.log(link);
            comments[i].style.display = 'none';
        }
    }
}

function blockMsg(msgs){
    console.log(msgs);
    for (i = 0; i < msgs.length; i++){
        var link = msgs[i].getElementsByTagName('a')[0].href;
        if (links.has(link)){
            console.log(link);
            msgs[i].style.display = 'none';
        }
    }
}

