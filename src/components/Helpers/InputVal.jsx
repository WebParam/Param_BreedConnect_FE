export default function InputVal({
    value,
    required,

  }) {
    return (
        <>
            { required && (value == undefined || value?.length ==0)  && 
            <div>
            <small style={{fontWeight: "100", color: "red"}}>This field is required</small>
            </div>
            }
        </>
    );
  }
  
