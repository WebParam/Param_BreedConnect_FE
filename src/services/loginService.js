import Cookies from 'universal-cookie';
const cookies = new Cookies();

export function LoginSuccess(user){
    debugger;
    cookies.set('bcon-user', user?.data, { path: '/' });
    if(window){
        window.location.href = '#/personnel';  
        window.location.reload();
    }

}
