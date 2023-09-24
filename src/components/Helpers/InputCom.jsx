import InputVal from "./InputVal";
export default function InputCom({
  label,
  type,
  name,
  placeholder,
  children,
  inputHandler,
  value,
  inputClasses,
  labelClasses = "text-qgray text-[13px] font-normal",
  inputStyle,
  inputContainerStyle,
  required,
  submitted,
  customInputValArray
}) {
  return (
    <div className="input-com w-full h-full">
      {label && (
        <label
          className={`input-label capitalize block  mb-2 ${labelClasses || ""}`}
          htmlFor={name}
        >
          {label}
        </label>
      )}
      <div  style={inputContainerStyle} className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative ">
        <input
          placeholder={placeholder}
          value={value}
          onChange={inputHandler} 
          style={inputStyle}
          className={`input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full h-full font-normal bg-white focus:ring-0 focus:outline-none ${inputClasses || ""
            }`}
          type={type}
          id={name}
        />
        {children && children}
      </div>
      { required && (value == undefined || value?.length ==0)  && 
        <InputVal 
        value={value} 
        required = {required}
        submitted={submitted}
        />
      }
      {customInputValArray!=undefined &&  customInputValArray.length>0 && customInputValArray.map(x=>{return x})}
     
    </div>
  );
}
