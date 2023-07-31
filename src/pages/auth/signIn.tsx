import { Typography } from "~/components/ui/Typography"
import { Input } from "~/components/ui/Input"
import Logo from 'icons/logo-devlinks-large.svg'
import EmailIcon from 'icons/email.svg'
import PasswordIcon from 'icons/password.svg'
import { Button } from "~/components/ui/Button"
import Link from "next/link"

const SignInPage = () => {
  return (
    <section className="flex flex-col items-center justify-center h-full gap-y-14">
      <Logo />
      <form className="p-10 bg-white rounded-xl w-[476px]">
        <Typography variant="headingM">
          Login
        </Typography>
        <Typography variant="bodyM" className="mt-2 text-gray-400">
          Add your details below to get back into the app
        </Typography>
        <div className="flex flex-col mt-10 gap-y-6">
          <div>
            <Typography variant="bodyS">
            Email address
            </Typography>
            <Input 
              placeholder="e.g. alex@email.com"
              type="email"
              value=""
              onChange={() => {}}
              icon={EmailIcon}
            />
          </div>
          <div>
            <Typography variant="bodyS">
            Password
            </Typography>
            <Input 
              placeholder="Enter your password"
              type="password"
              value=""
              onChange={() => {}}
              icon={PasswordIcon}
            />
          </div>
          <Button type="submit" variant="primary" className="">
            Login
          </Button>
          <Typography variant="bodyM" className="text-center text-gray-400">
            Don&apos;t have an account? <Link href="/auth/signUp" className="text-primary">Create account</Link>
          </Typography>
        </div>
      </form>
    </section>
  )
}

export default SignInPage