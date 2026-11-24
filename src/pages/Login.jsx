import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Card, Label, TextInput } from 'flowbite-react'
import { Mail, Lock, Heart } from 'lucide-react'

function Login() {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

 
  return (
    
    <div className="min-h-[75vh] flex items-center justify-center px-4 py-12 bg-gray-50">
      
        <div
        className="min-h-screen w-full bg-cover bg-center bg-fixed flex flex-col justify-center items-center px-4 py-8"
        style={{
          backgroundImage:
            "url('https://t3.ftcdn.net/jpg/05/04/36/84/360_F_504368477_XGrt6brpAmFWPfjWGnPJD9bLU6Gi35yG.jpg')",
        }}
      >
      <Card className="w-full max-w-md shadow-lg">

        <div className="text-center">
          <Heart size={45} className="text-red-600 mx-auto" />

          <h1 className="text-3xl font-bold mt-3">
            Welcome Back
          </h1>

          <p className="text-gray-500 mt-2">
            Login to your LifeLink account
          </p>
        </div>

        <form  className="flex flex-col gap-5">

          <div>
            <Label htmlFor="email">Email Address</Label>
            <TextInput
              id="email"
              type="email"
              icon={Mail}
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <Label htmlFor="password">Password</Label>
            <TextInput
              id="password"
              type="password"
              icon={Lock}
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && (
            <p className="text-red-600 text-sm">{error}</p>
          )}

          <Button type="submit" color="red" className="w-full">
            Login
          </Button>

        </form>

        <p className="text-center text-gray-600">
          Don't have an account?{' '}
          <Link to="/register" className="text-red-600 font-semibold">
            Register
          </Link>
        </p>

      </Card>
      </div>
    </div>
  )
}

export default Login