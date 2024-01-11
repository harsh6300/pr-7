const usercontroller = require('../models/usermodels')

const login = (req,res) => {
    if(res.locals.users){
        return res.redirect('/home');
    }
    return res.render('login');
}
const signup = (req,res) =>{
    return res.render('signup')
}

const register = async(req,res) =>{
    try{
        let name = req.body.name;
        let fullname = req.body.fullname;
        let email = req.body.email;
        let password = req.body.password;

        let user = await usercontroller.create({
            name : name,
            fullname : fullname,
            email : email,
            password : password
        })
        
        if(!name || !email || !password || !fullname){
            console.log("all field are required");
            return res.redirect('back');
        }

        return res.redirect('/');

    }catch(err){
        console.log(err);
        return false
    }
}
const loginpage =(req,res) =>{
    return res.redirect('/index');
}
const index = (req,res )=>{
    
    return res.redirect('index')
}

module.exports = {
    login,signup,register,loginpage,index
}