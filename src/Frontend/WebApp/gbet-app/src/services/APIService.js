const makeRequest = () => {
    const request = async (url, method = 'GET', body = null, headers = {}) => {

        const baseUrl = 'https://g-bet.herokuapp.com'
        
        if (body) {
            body = JSON.stringify(body)
            headers['Content-Type'] = 'application/json'
        }

        const response = await fetch(baseUrl + url, {method, body, headers})
        const data = await response.json()

        if (!response.ok) {
            throw new Error(data || 'Что-то пошло не так')
        }

        return data
        
  }

  return [request]
}

export default class APIService {

    static async getStudents() {
        const [request] = makeRequest()
        const data = await request('/api/students/')
        return data
    }

    static async getUnauthorizedStudents() {
        const [request] = makeRequest()
        const data = await request('/api/students/')
        const users = await this.getUsers()
        return data.filter(s =>
            !users.some(u => u.student.id === s.id))
    }

    static async getUsers() {
        const [request] = makeRequest()
        const data = await request('/api/users/')
        return data
    }

    static async getUser(id) {
        const [request] = makeRequest()
        const data = await request(`/api/users/${id}`)
        return data
    }

    static async createUser(studentId) {
        const [request] = makeRequest()
        const data = await request('/api/users/create/',
            'POST', {student_id: studentId})
        return data
    }

    static async getEvents() {
        const [request] = makeRequest()
        const data = await request('/api/events/')
        return data.filter(event => !event.is_finished)
    }

    static async getBets(eventId) {
        const [request] = makeRequest()
        const data = await request('/api/bets/')
        return data.filter(bet => bet.event.id.toString() === eventId)
    }

    static async createBet(userId, betId, betAmount) {
        const [request] = makeRequest()
        const data = await request('/api/user_bets/create/',
            'POST', {user_id: userId, bet_id: betId, bet_amount: betAmount})
        return data
    }

    static async getUserBets(userId) {
        const [request] = makeRequest()
        const data = await request('/api/user_bets/')
        return data.filter(bet => bet.user.student.id === userId)
    }
}