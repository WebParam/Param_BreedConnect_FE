import Cookies from 'universal-cookie';
const cookies = new Cookies();

export function LoginSuccess(user){
    debugger;
    cookies.set('bcon-user', user?.data, { path: '/' });
    if(window){
        // window.location.href = '#/personnel';  
        // window.location.reload();
    }

}

export function RegisterSuccess(user){
    
    if(window){
        window.location.href = '/login';  
        // window.location.reload();
    }

}

