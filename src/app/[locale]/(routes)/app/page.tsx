import { useTranslations } from "next-intl"

const AppPage = () => {
    const t = useTranslations('Index')

    return (
        <div>{t('title')}</div>
    )
}

export default AppPage