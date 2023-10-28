import React from 'react'

const Contact = () => {
  return (
    <div className="contact">
      <main>
        <h1>Contact US</h1>
        <form action="
        ">
        <div>
          <label htmlFor="">name</label>
          <input type="text" required placeholder='Abc' />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input type="text" required placeholder='Abc@xyz.com' />
        </div>
        <div>
          <label htmlFor="">Message</label>
          <input type="text" required placeholder='Tell us Bout Your query...' />
        </div>
        <button type='submit'>Send</button>


        </form>

      </main>
    </div>
  )
}

export default Contact;