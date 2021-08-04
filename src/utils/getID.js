export default function getID(params) {
    let a = params;
    let b = a.location.pathname.split('/');
    return b[2];

    
}