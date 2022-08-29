import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Form from 'App/Models/Form'

export default class FormsController {
  public async store({ request, response }: HttpContextContract) {
    const body = request.body()

    const form = await Form.create(body)

    response.status(201)

    return {
      message: 'formulário enviado com sucesso',
      form,
    }
  }
}
