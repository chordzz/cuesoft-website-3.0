import React from 'react'
import './MailchimpForm.css'

import { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';

export const MailchimpForm = () => {

    const [email, setEmail] = useState("")
    const [firstName, setFirstName] = useState("")
    const [ lastName, setLastName ] = useState("")

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target
        setEmail(value)
      }
    
      const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target
        setFirstName(value)
      }
    
      const handleNameChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target
        setLastName(value)
      }

  return (
    <div>
        <Form 
            className="ui form mailchimp-form"
            action={process.env.REACT_APP_MAILCHIMP_URL} method="POST"
        >
            <input type="hidden" name="u" value={process.env.REACT_APP_MAILCHIMP_U}/>
            <input type="hidden" name="id" value={process.env.REACT_APP_MAILCHIMP_ID}/>

            <Form.Field>
                <label htmlFor='MERGE1'>First Name</label>
                <input type="text" onChange={handleNameChange} name="MERGE1" id="MERGE1" size={25} value={firstName}/>
            </Form.Field>
            <Form.Field>
                <label htmlFor='MERGE2'>Last Name</label>
                <input type="text" onChange={handleNameChange2} name="MERGE2" id="MERGE2" size={25} value={lastName}/>
            </Form.Field>
            <Form.Field>
                <label htmlFor='MERGE0'>Email</label>
                <input type="email" autoCapitalize="off" autoCorrect="off" name="MERGE0" id="MERGE0" size={25} value={email} onChange={handleEmailChange} />
            </Form.Field>
            <input type="hidden" name="ht" value="d28c3f4aff69a15419f00dea8fa1a2478a220866:MTY1NzAzNTU0NC43MzMx"/>
            <input type="hidden" name="mc_signupsource" value="hosted"/>
            <Button type="submit" name="submit">Submit</Button>
        </Form>
    </div>
  )
}
