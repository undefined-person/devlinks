import { Typography } from "~/components/ui/Typography"
import { Input } from "~/components/ui/Input"
import Logo from 'icons/logo-devlinks-large.svg'
import EmailIcon from 'icons/email.svg'
import PasswordIcon from 'icons/password.svg'
import { Button } from "~/components/ui/Button"
import Link from "next/link"

const SignUpPage = () => {
  return (
    <section className="flex flex-col items-center justify-center h-full gap-y-14">
      <Logo />
      <form className="p-10 bg-white rounded-xl w-[476px]">
        <Typography variant="headingM">
          Create account
        </Typography>
        <Typography variant="bodyM" className="mt-2 text-gray-400">
          Let&apos;s get you started sharing your links!
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
              Create password
            </Typography>
            <Input 
              placeholder="At least 8 characters"
              type="password"
              value=""
              onChange={() => {}}
              icon={PasswordIcon}
            />
          </div>  
          <div>
            <Typography variant="bodyS">
              Confirm password
            </Typography>
            <Input 
              placeholder="At least 8 characters"
              type="password"
              value=""
              onChange={() => {}}
              icon={PasswordIcon}
            />
          </div>
          <Typography variant="bodyS" className="text-gray-400">
            Password must contain at least 8 characters
          </Typography>
          <Button type="submit" variant="primary" className="">
            Create new account
          </Button>
          <Typography variant="bodyM" className="text-center text-gray-400">
            Already have an account? <Link href="/auth/signIn" className="text-primary">Login</Link>
          </Typography>
        </div>
      </form>
    </section>
  )
}

export default SignUpPage