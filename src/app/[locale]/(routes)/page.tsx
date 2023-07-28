import { Hero } from "@/components/Hero"
import { getTranslator } from "next-intl/server"

interface Props {
  params: { locale: string }
}

export default function HomePage({ params: { locale } }: Props) {

  const t = getTranslator(locale, 'Index')
  

  return (
    <main>
      <Hero />
      {/* {t('title')} */}
      {/* <SignOutButton />
      <SignInButton mode="modal">
        <button className="btn">
          Sign in
        </button>
      </SignInButton> */}
    </main>
  )
}
