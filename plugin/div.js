var div = (a) => {
    var html = "";
    if (a.child != undefined) {
        for (var i = 0; i < a.child.length; i++) {
            html += "<div";
            if (a.className != undefined) {
                if (Array.isArray(a.className) == true) {
                    if (a.className[i] != undefined) {
                        html += " class='"+a.className[i]+"'";
                    }
                }else{
                    html += " class='"+a.className+"'";
                }
            }
            if (a.id != undefined) {
                if (Array.isArray(a.id) == true) {
                    if (a.id[i] != undefined) {
                        html += " id='"+a.id[i]+"'";
                    }
                }else{
                    html += " id='"+a.id+"'";
                }
            }
            html += ">";
            html += a.child[i];
            html += "</div>";
        }
    }
    return html;
}