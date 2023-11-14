import api from '../apis/api'

class CorService {
  async getAllCores() {
    const response = await api.get('/cores/')
    return response.data
  }
  async saveCores(cores) {
    const response = await api.post('/cores/', cores)
    return response.data
  }
  async deleteCores(cores) {
    const response = await api.delete(`/cores/${cores.id}/`)
    return response.data
  }
}

export default new CorService()