import React, { useEffect, useState } from 'react'
import PortalHeader from "./adminHeader.jsx/PortalHeader";
import axios from "axios";

const NewsLetterPage = () => {
    const [newsletter, setNewsletter] =  useState([])

    const getNewsletterFunc = async () => {
      const data = await axios.get("/api/contact/newsletter")
      setNewsletter(data?.data)
    }

    useEffect(() => {
      getNewsletterFunc()
    },[])
  return (
    <PortalHeader>
    <form className="broadcaster-form p-5 m-5">
      <div className="mb-3">
        <h2>Subscribed User on NewsLetter:</h2>
        {newsletter?.map((item) => 
        <ol>
        <li>{item.email}</li>
    </ol>)}
        
      </div>
    </form>
  </PortalHeader>
  )
}

export default NewsLetterPage