import DarkMode from '@/components/mollecules/DarkMode'
import DrawerToggler from '@/components/mollecules/DrawerToggler'
import Nav from '@/components/mollecules/Nav'
import clsx from 'clsx'
import { useRouter } from 'next/router'

const Header = () => {
  const { pathname } = useRouter()

  if (pathname === '/_error' || pathname === '/404') return null

  return (
    <header
      className={clsx('fixed inset-0 h-20', 'bg-main-1 dark:bg-main-5 z-50')}
    >
      <div
        className={clsx(
          'h-2 w-full',
          'bg-gradient-to-r',
          'from-primary-3 to-secondary-3'
        )}
      />

      <section
        className={clsx(
          'layout',
          'flex items-center justify-between',
          'h-full -mt-1.5'
        )}
      >
        <Nav />
        <DrawerToggler />
        <DarkMode />
      </section>
    </header>
  )
}

export default Header
