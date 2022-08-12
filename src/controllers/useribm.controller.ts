import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where
} from '@loopback/repository';
import {
  del, get,
  getModelSchemaRef, param, patch, post, put, requestBody,
  response
} from '@loopback/rest';
import {Useribm} from '../models/useribm.model';
import {UseribmRepository} from '../repositories/useribm.repository';

export class UseribmController {
  constructor(
    @repository(UseribmRepository)
    public useribmRepository: UseribmRepository,
  ) { }

  @post('/useribms')
  @response(200, {
    description: 'Useribm model instance',
    content: {'application/json': {schema: getModelSchemaRef(Useribm)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Useribm, {
            title: 'NewUseribm',
            exclude: ['id'],
          }),
        },
      },
    })
    useribm: Omit<Useribm, 'id'>,
  ): Promise<Useribm> {
    return this.useribmRepository.create(useribm);
  }

  @get('/useribms/count')
  @response(200, {
    description: 'Useribm model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Useribm) where?: Where<Useribm>,
  ): Promise<Count> {
    return this.useribmRepository.count(where);
  }

  @get('/useribms')
  @response(200, {
    description: 'Array of Useribm model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Useribm, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Useribm) filter?: Filter<Useribm>,
  ): Promise<Useribm[]> {
    return this.useribmRepository.find(filter);
  }

  @patch('/useribms')
  @response(200, {
    description: 'Useribm PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Useribm, {partial: true}),
        },
      },
    })
    useribm: Useribm,
    @param.where(Useribm) where?: Where<Useribm>,
  ): Promise<Count> {
    return this.useribmRepository.updateAll(useribm, where);
  }

  @get('/useribms/{id}')
  @response(200, {
    description: 'Useribm model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Useribm, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Useribm, {exclude: 'where'}) filter?: FilterExcludingWhere<Useribm>
  ): Promise<Useribm> {
    return this.useribmRepository.findById(id, filter);
  }

  @patch('/useribms/{id}')
  @response(204, {
    description: 'Useribm PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Useribm, {partial: true}),
        },
      },
    })
    useribm: Useribm,
  ): Promise<void> {
    await this.useribmRepository.updateById(id, useribm);
  }

  @put('/useribms/{id}')
  @response(204, {
    description: 'Useribm PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() useribm: Useribm,
  ): Promise<void> {
    await this.useribmRepository.replaceById(id, useribm);
  }

  @del('/useribms/{id}')
  @response(204, {
    description: 'Useribm DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.useribmRepository.deleteById(id);
  }
}
