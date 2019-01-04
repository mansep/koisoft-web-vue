var Email = {
    send: function(a) {
        var t = JSON.stringify(a);
        return fetch("https://smtpjs.com/v3/smtpjs.aspx?", {
            method: 'POST',
            body: t,
            headers:{
              "Content-Type": "application/x-www-form-urlencoded"
            }
        })
    }
};

export default Email; 