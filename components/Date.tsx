import utilStyles from '../styles/utils.module.css'
interface Props{
    date:string
}

type localeLenguage = 
| 'es-ES'
| 'en-EN'

const options = {
    month:'long',
    day:'2-digit'
}

const locale : localeLenguage = "es-ES"

export default function DateFormated({date}:Props){

    const formatDate = new Intl.DateTimeFormat(locale,{
        year:'numeric',
        month:'long',
        day:'2-digit',
    }).format(new Date(date))

    return <h5 className={utilStyles.lightText}>{formatDate}</h5>
}