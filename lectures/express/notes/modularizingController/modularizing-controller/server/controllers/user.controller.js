export function getAllUsers(req, res) {
    res.send("GET Request");
}
export function createUser(req, res) {
    res.send("POST Request");
}




const UserController = {
    getAllUsers: (req, res) => {
        res.send("GET Request");
    },
    createUser: (req, res) => {
        res.send("POST Request");
    }
}

export default UserController;

