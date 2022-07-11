import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import { MailchimpForm } from './MailchimpForm'

export const MailchimpModal = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Subscribe to our mailing list</Button>}
      style={{
      width: '50%',
      backgroundColor: "red",
      }}
    >
      <Modal.Header>Join our mailing list</Modal.Header>
      <Modal.Content>
        <Modal.Description>

				<MailchimpForm />

        </Modal.Description>
      </Modal.Content>
    </Modal>
  )
}

