import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Card, Label, TextInput, Button, Select } from 'flowbite-react'

function Register() {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    bloodGroup: '',
    city: ''
  })

  const [error, setError] = useState('')

  return (

    <div className="min-h-[75vh] flex justify-center items-center bg-gray-50 px-4 py-12">
        <div
        className="min-h-screen w-full bg-cover bg-center bg-fixed flex flex-col justify-center items-center px-4 py-8"
        style={{
          backgroundImage:
            "url('https://t3.ftcdn.net/jpg/05/04/36/84/360_F_504368477_XGrt6brpAmFWPfjWGnPJD9bLU6Gi35yG.jpg')",
        }}
      >
      <Card className="w-full max-w-lg">

        <h1 className="text-3xl font-bold text-center">
          Create Account
        </h1>

        <p className="text-gray-500 text-center">
          Join the LifeLink community
        </p>

        <form className="flex flex-col gap-4">

          <div>
            <Label value="Full Name" />
            <TextInput name="name" placeholder="Enter your name"
              value={form.name}   required />
          </div>

          <div>
            <Label value="Email Address" />
            <TextInput name="email" type="email"
              placeholder="Enter your email"
              value={form.email}  required />
          </div>

          <div>
            <Label value="Password" />
            <TextInput name="password" type="password"
              placeholder="Create password"
              value={form.password} 
              minLength={8} required />
          </div>

          <div>
            <Label value="Blood Group" />
            <Select name="bloodGroup"
              value={form.bloodGroup}
                required>
              <option value="">Select Blood Group</option>
              {['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'].map(group =>
                <option key={group}>{group}</option>
              )}
            </Select>
          </div>

          <div>
            <Label value="City" />
            <TextInput name="city" placeholder="Enter your city"
              value={form.city}  required />
          </div>

          {error && <p className="text-red-600 text-sm">{error}</p>}

          <Button type="submit" color="red">
            Register
          </Button>

        </form>

        <p className="text-center text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-red-600 font-semibold">
            Login
          </Link>
        </p>

      </Card>
      </div>
    </div>
  )
}

export default Register