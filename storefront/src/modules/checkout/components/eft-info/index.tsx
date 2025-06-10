import React from "react"

const EftInfo = () => {
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
      <h4 className="font-semibold text-blue-900 mb-2">
        Electronic Funds Transfer (EFT) Payment
      </h4>
      <div className="text-sm text-blue-800 space-y-2">
        <p>
          • You will receive payment instructions via email after completing your order
        </p>
        <p>
          • Your order will be processed once payment is received
        </p>
        <p>
          • Please use the provided reference number when making your payment
        </p>
        <p>
          • Processing time: 1-3 business days
        </p>
      </div>
    </div>
  )
}

export default EftInfo
