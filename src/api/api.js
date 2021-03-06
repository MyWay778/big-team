import * as axios from "axios"

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY":"3a552f0e-ae9c-4580-849a-f5cac9991388"
    }
})

export const authAPI =  {
    authMe () {
        return instance.get('auth/me').then(response => response.data)
    },
    signIn (values) {
        return instance.post('auth/login', {...values}).then( response => response.data)
    },
    signOut () {
        return instance.delete('auth/login').then( response => response.data)
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`).then(response => response.data)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`).then(response =>  response.data)
    },
    setStatus(status) {
        return instance.put(`profile/status`, {status: status}).then(response => response.data)
    },
    sendPhoto(photo) {
        return instance.put(`profile/photo`, photo).then(response => response.data)
    },
    sendChanges(newData) {
        return instance.put(`profile`, newData).then(response => response.data)
    }
}

export const usersAPI = {
    getUsers(itemCount, currentPage) {
        return instance.get(`users?count=${itemCount}&page=${currentPage}`).then(response => response.data)
    },
    follow(userId) {
        return instance.post(`follow/${userId}`, {}).then(response => response.data)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`).then(response => response.data)
    }
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get('security/get-captcha-url').then(response => response.data)
    }
}