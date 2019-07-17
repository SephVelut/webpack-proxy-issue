import axios from 'axios'

window.click = function() {
    axios({
        method: 'post',
        url: '/login',
        data: {
            username: "admin",
            password: "admin"
        }
    })
        .then(function (r) {
            console.log(r)
        })
        .catch(function (e) {
            console.log(e)
        })
}
