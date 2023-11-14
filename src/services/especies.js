import api from '../apis/api'

class EspecieService {
  async getAllEspecies() {
    const response = await api.get('/especies/')
    return response.data
  }
  async saveEspecies(especies) {
    const response = await api.post('/especies/', especies)
    return response.data
  }
  async deleteEspecies(especies) {
    const response = await api.delete(`/especies/${especies.id}/`)
    return response.data
  }
}

export default new EspecieService()