exports.InvoiceCreate = async (req,res) =>{


    return res.status(200).json({
        success: true,
        message: "Invoice Create"
    })

}


exports.InvoiceList = async (req,res) =>{


    return res.status(200).json({
        success: true,
        message: "Invoice List"
    })

}


exports.InvoiceProductList = async (req,res) =>{


    return res.status(200).json({
        success: true,
        message: "Invoice Product List"
    })

}

exports.PaymentSuccess = async (req,res) =>{


    return res.status(200).json({
        success: true,
        message: "Payment Success"
    })

}

exports.PaymentFail = async (req,res) =>{


    return res.status(200).json({
        success: true,
        message: "Payment Fail"
    })

}

exports.PaymentCancel = async (req,res) =>{


    return res.status(200).json({
        success: true,
        message: "Payment Cancel"
    })

}


exports.PaymentIPN = async (req,res) =>{


    return res.status(200).json({
        success: true,
        message: "Payment IPN"
    })

}