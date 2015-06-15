function getUsers(document_root) {
    var ids = [];
    var links = [];
    var names = [];
    var div = document_root.getElementsByClassName('blocked-users')[0];

    var users = div.getElementsByClassName('item');
    for (i = 0; i < users.length; i++){
        ids.push(users[i].getAttribute('data-id'));
        var link = users[i].getElementsByTagName('a')[1];
        links.push(link.href);
        names.push(link.innerHTML);
    }

    var msg = [];
    msg.push(ids);
    msg.push(links);
    msg.push(names);
    return msg;
}

chrome.extension.sendMessage({
    action: "Import",
    source: getUsers(document)
});
