import Logo from 'icons/logo-devlinks-large.svg'
import LinkIcon from 'icons/link.svg'
import ProfileIcon from 'icons/profile-details-header.svg'

import { type TabItem, Tabs } from './ui/Tabs'
import { Button } from './ui/Button'

  
const tabs: TabItem[] = [
  {
    label: 'Links',
    icon: LinkIcon,
    onClick: () => {
      console.log('Links')
    }
  },
  {
    label: 'Profile details',
    icon: ProfileIcon,
    onClick: () => {
      console.log('Profile details')
    }
  }
]

export const Header = () => {
  return (
    <header className='flex items-center justify-between px-6 py-4 m-4 bg-white rounded-xl'>
      <Logo />
      <Tabs items={tabs} selectedTab={tabs[0]} />
      <Button variant='secondary'>
        Preview
      </Button>
    </header>
  )
}

