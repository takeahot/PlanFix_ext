class cPF {
    constructor(apiKey,token,account,url) {
        this.parse = new DOMParser();
        this.xr_data = {};
        this.xr_data.url = url;
        this.xr_data.account = account;
        this.xr_data.headers = {
            Authorization: "Basic " + btoa(apiKey + ":" + token),
            Accept: "application/xml",
            "Content-Type": "application/xml"
        }
    }
    SendReq () {
        let xr = new XMLHttpRequest();
        xr.onload = function () {
        return this.responseXML;
    }

        };
        this.xr.open('POST','https://apiru.planfix.ru/xml/',true);
    getUserList () {
        reqBody = '<request method="user.getList">'
            + '<account>acgm</account>'
            + '<status>ACTIVE</status>'
            +  "</request>";
        console.log(reqBody);
        xr = parse.parseFromString(reqBody,'text/xml');
        this.xr.send(xr);
    }

    xr () {

    }
}


$(function () {
    if ( typeof parse == 'undefined' ) {
        var parse = new DOMParser();
    }
    var a = new XMLHttpRequest();
    var xr = 'xmlDoc';
    a.onload = function () {
        document.getElementById('user_list').innerHTML = this.responseXML;
        console.log(this.responseXML)
    };
    a.open('POST','https://apiru.planfix.ru/xml/',true);
    a.setRequestHeader("Authorization", "Basic " + btoa("e98af7c15042cc61ca26e0537383eb03" + ":" + "0f816577be7d7c7c79aec532693cc84c"));
    a.setRequestHeader('Accept','application/xml');
    a.setRequestHeader('Content-Type','application/xml');
    reqBody = '<request method="user.getList">'
                  + '<account>acgm</account>'
                  + '<status>ACTIVE</status>'
                  +  "</request>";
    console.log(reqBody);
    xr = parse.parseFromString(reqBody,'text/xml');
    a.send(xr);
})

