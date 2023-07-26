// import { SignInButton, SignOutButton } from "@clerk/nextjs"
import { Hero } from "@/components/Hero"
import { useTranslations } from "next-intl"


export default function HomePage() {

  const t = useTranslations('Index')

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
