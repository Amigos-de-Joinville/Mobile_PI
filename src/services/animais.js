import api from '../apis/api'

class AnimalService {
  async getAllAnimais() {
    const response = await api.get('/animais/')
    return response.data
  }
  async saveAnimal(Animal, image) {
    // Animal.especie = [Animal.especie]
    Animal.foto_attachment_key = image.attachment_key
    console.log(Animal)
    const response = await api.post('/animais/', Animal)
    return response.data
  }
  async deleteAnimal(Animal) {
    try {
      console.log("Id do animal será deletado", Animal.id);
      const response = await api.delete(`/animais/${Animal.id}/`);
      return response.data;
    } catch (error) {
      console.error("Erro ao excluir animal:", error);
      throw error;
    }
  }
}

export default new AnimalService()