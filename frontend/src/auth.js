export default function isAuthenticated() {
    const ongId = localStorage.getItem('OngId');

    if(ongId == null)   return false;
    else    return true;

};


