class cPF {
    constructor(apiKey,token,account,url) {
        this.connParam = [apiKey,token,account,url];
    }
    generFetch (body) {
    return fetch(this.connParam[3],{
        method:'POST',
        headers: {
            'Authorization': "Basic " + btoa(this.connParam[0] + ":" + this.connParam[1]),
            'Accept': 'application/xml',
            'Content-Type': 'application/xml'
        },
        body: body})
    .then(response => response.text())
    .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
    .then(data => console.log(data))
    }
    userGetList () {
        return this.generFetch('<request method="user.getList">' + '<account>' + this.connParam[2] + '</account>' + '</request>')
    }
}

$(function () {
        let ares = new cPF('e98af7c15042cc61ca26e0537383eb03','0f816577be7d7c7c79aec532693cc84c','acgm','https://apiru.planfix.ru/xml/');
        ares.userGetList();
    }
)

