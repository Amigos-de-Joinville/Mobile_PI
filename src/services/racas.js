import api from '../apis/api'

class RacaService {
  async getAllRacas() {
    const response = await api.get('/racas/')
    return response.data
  }
  async saveRacas(racas) {
    const response = await api.post('/racas/', racas)
    return response.data
  }
  async deleteRacas(racas) {
    const response = await api.delete(`/racas/${racas.id}/`)
    return response.data
  }
}

export default new RacaService()