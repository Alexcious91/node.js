exports.sendReqParams = (req, res) => {
    const productName = req.params.name;
    res.send(`This page is for: ${productName}`)
}

exports.postData = (req, res) => {
    // console.log(req.url);
    console.log(req.query);
    res.send("Data posted successfully")
}

exports.returnName = (req, res) => {
    let name = req.params.firstName;
    res.render("home", { userName: name });
}