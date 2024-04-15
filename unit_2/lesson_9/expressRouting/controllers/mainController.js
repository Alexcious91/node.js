// Used fo

exports.sendReqParams = (req, res) => {
    const productName = req.params.name;
    res.send(`This page is for: ${productName}`)
}

