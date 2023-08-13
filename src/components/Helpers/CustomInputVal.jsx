export  default function CustomInputVal({
  value,
  valFunction,
  message
  
}

) {

  const res = valFunction(value);

  return (
      <>
          { res  && 
          <div>
          <small style={{fontWeight: "100", color: "red"}}>{message}</small>
          </div>
          }
      </>
  );
}

