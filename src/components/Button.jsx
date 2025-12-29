export const Button = ({
    disabled,
    children,
    onClick
}) => {
    return <span className={`py-2 px-2 rounded text-white cursor-pointer text-center ${disabled ? "bg-gray-700" : "bg-[#788aa0]"}`} onClick={onClick} disabl >
        {children}
    </span>

}