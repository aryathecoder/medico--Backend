import User from "../Schema/register.js";
const LoginUsers = async(req, res) => {
    const { email } = await req.body;
    const { password } = await req.body;
    console.log(req.body);
    try {
        const existUser = await User.findOne({ email: email });
        console.log(existUser);
        if (existUser) {
            if (existUser.email === email && existUser.password === password) {
                res.status(200).json({
                    message: `You can use the Website now. ${email}.`,
                });
            } else {
                res.status(500).json({
                    message: `the email and password is not correct.`,
                });

            }
        } else {
            res.json({ message: "user dont exists please register before login" })
        }

    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
export default LoginUsers;