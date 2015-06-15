// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function importUsers(){
    chrome.extension.onMessage.addListener(function(request, sender) {
        if (request.action == "Import") {
            var users = request.source;
            chrome.storage.local.set({'users': users}, function() {
                // Notify that we saved.
                var msg = '已成功保存屏蔽用户' +  users[0].length + "个";
                msg += '<br />';
                for (i = 0; i < users[2].length; i++){
                    msg += users[2][i];
                    msg += '<br />';
                }
                document.getElementById("message").innerHTML = msg;
            });
        }
    });
    chrome.tabs.executeScript({
        file: "importUsers.js"
    }, function() {
        if (chrome.extension.lastError) {
            message.innerText = '找不到任何屏蔽用户的信息';
        }
    });
}

document.getElementById("import").onclick = importUsers;

