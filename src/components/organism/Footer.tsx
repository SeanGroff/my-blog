import FooterLinks from '@/components/mollecules/FooterLinks'
import { APP_ROUTE } from '@/constant/route'
import { socialMedia } from '@/constant/socialMedia'
import clsx from 'clsx'

const Footer = () => {
  const owner = process.env.NEXT_PUBLIC_OWNER_NAME
  return (
    <footer
      className={clsx(
        'layout',
        'mt-20 py-10 border-t',
        'border-main-2 dark:border-main-3'
      )}
    >
      <section className="flex items-stretch w-full gap-8">
        <FooterLinks data={APP_ROUTE} />
        <FooterLinks data={socialMedia} />
      </section>
      <section className="mt-10">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} {owner}
        </p>
      </section>
    </footer>
  )
}

export default Footer
