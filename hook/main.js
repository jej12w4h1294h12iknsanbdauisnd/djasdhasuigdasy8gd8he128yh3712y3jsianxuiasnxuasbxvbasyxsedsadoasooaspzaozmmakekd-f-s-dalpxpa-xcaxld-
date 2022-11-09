$(function(){
    $('#btn').click(function(){
        var link = $('#URL_webHook_Input').val();
        var username = $('#username').val();
        var avatar = $('#avatar_URL_Input').val();
        var content = $('#content_Webhook_Input').val();
        if (link==null || link=="") {
            alert("Please Fill Webhook URL Field");
            return false;
        }
        $.post(link, {"content": content || "Asperger", "username": username || "Webhook Sender", "avatar_url": avatar || "https://cdn.discordapp.com/icons/800060636041314375/021296ec7a235c39113b93d2c253b852.png?size=1024",});
        localStorage.setItem("link", link);
        localStorage.setItem("username", username || "Webhook Sender");
        localStorage.setItem("avatar", avatar || "https://cdn.discordapp.com/icons/800060636041314375/021296ec7a235c39113b93d2c253b852.png?size=1024");
    });
});
document.getElementById("URL_webHook_Input").value = localStorage.getItem("link");
document.getElementById("username").value = localStorage.getItem("username");
document.getElementById("avatar_URL_Input").value = localStorage.getItem("avatar");
$(function(){
    $('#btn2').click(function(){
        localStorage.removeItem("link");
        localStorage.removeItem("username");
        localStorage.removeItem("avatar");
    });
});