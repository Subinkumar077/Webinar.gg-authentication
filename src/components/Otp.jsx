import { useRef } from "react";

export const Otp = () => {
    const inputsRef = useRef([]);

    const handleChange = (index, e) => {
        if (e.target.value && index < inputsRef.current.length - 1) {
            inputsRef.current[index + 1].focus();
        }
    };

    return (
        <div className="flex items-center justify-center">
            {[...Array(6)].map((_, index) => (
                <input
                    key={index}
                    ref={(el) => (inputsRef.current[index] = el)}
                    type="text"
                    maxLength={1}
                    onChange={(e) => handleChange(index, e)}
                    className="text-white px-2 rounded m-1 h-[50px] w-[40px] bg-[#788aa0] text-center"
                />
            ))}
        </div>
    );
};
