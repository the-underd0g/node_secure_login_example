import { login, loginRequired, register} from "../controllers/userController";

const userRoutes = (app) => {
    app.route('/auth/register').post(register);
    app.route('/auth/login').post(login);


};

export default userRoutes;