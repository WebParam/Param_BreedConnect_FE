export default function InputVal({
    value,
    required,
  submitted
  }) {
    return (
        <>
            { required && (value == undefined || value?.length ==0)  && submitted &&
            <div>
            <small style={{fontWeight: "100", color: "red"}}>This field is required</small>
            </div>
            }
        </>
    );
  }
  
