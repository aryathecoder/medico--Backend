import User from "../Schema/register.js";
const registerUsers = async(req, res) => {
    console.log(req.body);
    const userdata = req.body;
    try {
        const createUser = await User.create(userdata);
        res.json({ message: "User Created.", user: createUser });
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ meshsage: "Internal server error" });
    }
};
export default registerUsers;