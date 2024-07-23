import bcrypt from 'bcrypt';

export const createHashPassword = async(password)=>{
    const saltRound = 10;

    const salts = await bcrypt.genSalt(saltRound);

    return bcrypt.hash(password,salts);
}

export const isValidPassword = async (password,user)=> await bcrypt.compare(password, user.password);