import { usersService } from "../services/users.services.js";

class UsersController {
    async findAllUsers(req, res){
        try {
            const allUsers = await usersService.findAllUsers()
            res.status(200).json({message: 'Users', allUsers})
        } catch (error) {
            res.status(500).json(logger.info(error))
        }
    }

    async findOneUser(req, res){
        const {idUser} = req.params
        try {
            const user = await usersService.findOneUser(idUser)
            res.status(200).json({message: 'User', user})
        } catch (error) {
            res.status(500).json(logger.info(error))
        }
    }

    async createOneUser(req, res){
        const {first_name, last_name, age, email, password} = req.body
        if(!first_name || !last_name || !age || !email || !password){
            res.status(401).json({message: 'Some data is missing'})
        }else{
            try {
                const newUser = {
                    first_name,
                    last_name,
                    age,
                    email,
                    password
                }
                const result = await usersService.createOneUser(newUser)
                res.status(200).json({message: 'User created', user: result})
            } catch (error) {
                res.status(500).json(logger.info(error))
            }
        }
    }

    async deleteOneUser(req, res){
        const {idUser} = req.params
        try {
            const user = await usersService.deleteOneUser(idUser)
            res.status(200).json({message: 'User deleted', user})
        } catch (error) {
            res.status(500).json(logger.info(error))
        }
    }
}

export const usersController = new UsersController()