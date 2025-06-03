import axios from 'axios';

const API_URL = 'http://localhost:8080/api/users'; // Your backend API endpoint

class UserService {

    //metodo para obtner todos los usuarios
    getUsers() {
        return axios.get(API_URL);
    }

    //si se necesita usar otro metodos, como obtener un usuario por id se puede agregar aqui
    // getUserById(userId) {
    //     return axios.get(`${API_URL}/${userId}`);
    // }
}

export default new UserService(); 