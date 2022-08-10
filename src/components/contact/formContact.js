import React, { useState } from "react"
import axios from "axios"

import { motion } from "framer-motion"
import addToMailchimp from "gatsby-plugin-mailchimp"

import "../../styles/contactForm.css"

const FormContact = () => {
  const Text = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "linear", stiffness: 100 }}
      exit={{ opacity: 0 }}
    >
      <div className="form-success">
        Thanks for your interest! We will get back to you shortly.
      </div>
    </motion.div>
  )

  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  })

  const [showText, setShowText] = useState(false)

  const [subscribeInfo, setSubscribeInfo] = useState({
    email: "",
    subscribe: true,
  })

  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    })
    if (ok) {
      setShowText(true)
      form.reset()
    }
  }

  const handleInputChange = event => {
    const target = event.target
    const value = target.type === "checkbox" ? target.checked : target.value
    const name = target.name
    setSubscribeInfo({
      ...subscribeInfo,
      [name]: value,
    })
  }

  const handleOnSubmit = async e => {
    e.preventDefault()
    const form = e.target
    setServerState({ submitting: true })
    const submission = new FormData(form)
    console.log("submission", submission)
    if (subscribeInfo.subscribe) {
      const result = await addToMailchimp(subscribeInfo.email, {
        FNAME: submission.get("firstname"),
        LNAME: submission.get("lastname"),
        MMERGE3: submission.get("company") || "",
      })
      console.log("Result - ", result)
      axios({
        method: "post",
        url: "/api/mailchimp/addToGroup",
        data: { subscriber_email: subscribeInfo.email },
      })
        .then(r => {
          console.log("Result - ", r)
        })
        .catch(r => {
          console.log("catch - ", r)
        })
    }
    axios({
      method: "post",
      url: "https://getform.io/f/0ecbf24f-a9b3-45c3-b645-8dee4b8509d0",
      data: submission,
    })
      .then(r => {
        handleServerResponse(true, "Thanks!", form)
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form)
      })
  }

  return (
    <div className="row" id="z-contact">
      <div className="col col-md-10 offset-md-1 col-lg-8 offset-lg-2">
        {showText ? (
          <Text />
        ) : (
          <form onSubmit={handleOnSubmit}>
            <div className="row form-group mb-40">
              <div className="col-md-6">
                <label htmlFor="firstname" className="mb-15">
                  First Name
                </label>
                <div className="mb-30">
                  <input id="firstname" type="text" name="firstname" required />
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="lastname" className="mb-15">
                  Last Name
                </label>
                <div className="mb-30">
                  <input id="lastname" type="text" name="lastname" required />
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="email" className="mb-15">
                  Email
                </label>
                <div className="mb-30">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={subscribeInfo.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="company" className="mb-15">
                  Company
                </label>
                <div className="mb-30">
                  <input id="company" type="text" name="company" />
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="phone" className="mb-15">
                  Phone Number (Optional)
                </label>
                <div className="mb-30">
                  <input id="phone" type="tel" name="phone" />
                </div>
              </div>
              <div className="col-12 mt-10">
                <label htmlFor="message" className="mb-15">
                  Message
                </label>
                <div>
                  <textarea id="message" name="message" required></textarea>
                </div>
              </div>
              <div className="col-12 mt-10 d-flex align-items-center">
                <input
                  type="checkbox"
                  id="subscribe"
                  name="subscribe"
                  checked={subscribeInfo.subscribe}
                  onChange={handleInputChange}
                ></input>
                <label htmlFor="subscribe">Subscribe to our email list?</label>
              </div>
            </div>

            <div className="form-group mb-40">
              <button
                disabled={serverState.submitting}
                type="submit"
                className="btn btn-blue-outline mb-50"
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}

export default FormContact
