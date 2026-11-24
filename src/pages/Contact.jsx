import { useState } from 'react'
import { Card, Label, TextInput, Textarea, Button } from 'flowbite-react'

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    e.target.reset()
  }

  return (
    <div className="min-h-[65vh] flex justify-center items-center px-5 py-16 bg-gray-50">

      <Card className="w-full max-w-lg">

        <h1 className="text-3xl font-bold text-center">
          Contact Us
        </h1>

        <p className="text-gray-500 text-center">
          We would love to hear from you.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <div>
            <Label value="Your Name" />
            <TextInput placeholder="Enter your name" required />
          </div>

          <div>
            <Label value="Email" />
            <TextInput type="email" placeholder="Enter your email" required />
          </div>

          <div>
            <Label value="Message" />
            <Textarea placeholder="Write your message..." rows={5} required />
          </div>

          <Button type="submit" color="red">
            Send Message
          </Button>

          {submitted && (
            <p className="text-green-600 text-center">
              Demo submission successful.
            </p>
          )}

        </form>

      </Card>
    </div>
  )
}

export default Contact