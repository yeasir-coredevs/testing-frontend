
export const PrimaryButton = ({ title, className, icon }) => {
    return (
        <button className={`flex justify-center items-center space-x-2 border py-2 px-5 bg-secondary text-primary rounded-50 text-sm font-bold ${className}`} >
            <img className="w-6 h-6" src={icon && icon} alt="" />
            <p>{title && title}</p>
        </button>
    )
}

export const SecondaryButton = ({ title, className, icon }) => {
    return (
        <button className={`border py-2 px-5 bg-primary text-white rounded-50 text-sm ${className}`} >
            {icon && icon}
            {title && title}
        </button>
    )
}

export const OutlineButton = ({ title, className, icon }) => {
    return (
        <button className={`border py-2 px-5 border-secondary text-primary text-sm rounded-50 ${className}`} >
            {icon && icon}
            {title && title}
        </button>
    )
}


