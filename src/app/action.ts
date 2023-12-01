'use server'


export async function submitHandler (formdata:FormData){
    const data = {
        name:formdata.get('name'),
        email:formdata.get('email'),
        password:formdata.get('password')
    }
    console.log(data)

// console.log(formdata.get('name'))
// console.log(formdata.get('email'))
// console.log(formdata.get('password'))
}