const client = require("@mailchimp/mailchimp_marketing")
const crypto = require("crypto")

const listId = "0599539572" // Zephyr's Main Audience in MC
const interestID = "3536bbe86c" // Zephyr Contact Form

client.setConfig({
  apiKey: process.env.MAILCHIMP_API,
  server: "us13",
})

const handler = async (req, res) => {
  let lowerEmail = req.body.subscriber_email.toLowerCase()
  let hash = crypto.createHash("md5").update(lowerEmail).digest("hex")

  const response = await client.lists.setListMember(listId, hash, {
    email_address: lowerEmail,
    status_if_new: "subscribed",
    interests: { [interestID]: true },
  })
  console.log("response", response)

  res.status(200).json({ response: response })
}

module.exports = handler
