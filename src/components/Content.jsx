import React from 'react'
import Typewriter from 'typewriter-effect'
import '../css/content.css'

const Content = () => {
  return (
    <div className='content-container'>
        <div className='typewriter-content'>
            <p>Hi, This is Sweti Singh</p>
            <p>Experience - 3.3 yrs</p>
        <Typewriter
      options={{
        strings:[
            'Welcome to my Web Developer Portfolio',
            'Please scroll to know more about me!'
        ],
        autoStart:true,
        loop:true
      }}
      />
        </div>
    </div>
  )
}

export default Content
