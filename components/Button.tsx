import Image from "next/image";

type ButtonProps = {
    type: 'button' | 'submit';
    title: string;
    icon?: string;
    variant: string;
    onClick?: () => void;
}

const Button = ({type, title, icon, variant, onClick} : ButtonProps) => {
  return (
    <button type={type} className={`flexCenter rounded-full ${variant} hover:bg-blue-700`} onClick={onClick}>
        {icon && <Image src={icon} alt="icon" width={24} height={24} />}
        <label className="whitespace-nowrap cursor-pointer text-gray-300 p-4">{title}</label>
    </button>
  )
}

export default Button