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
import {Costomers} from '../models';
import {CostomersRepository} from '../repositories';

export class CustomersController {
  constructor(
    @repository(CostomersRepository)
    public costomersRepository: CostomersRepository,
  ) { }

  @post('/costomers')
  @response(200, {
    description: 'Costomers model instance',
    content: {'application/json': {schema: getModelSchemaRef(Costomers)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Costomers, {
            title: 'NewCostomers',

          }),
        },
      },
    })
    costomers: Costomers,
  ): Promise<Costomers> {
    return this.costomersRepository.create(costomers);
  }

  @get('/costomers/count')
  @response(200, {
    description: 'Costomers model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Costomers) where?: Where<Costomers>,
  ): Promise<Count> {
    return this.costomersRepository.count(where);
  }

  @get('/costomers')
  @response(200, {
    description: 'Array of Costomers model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Costomers, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Costomers) filter?: Filter<Costomers>,
  ): Promise<Costomers[]> {
    return this.costomersRepository.find(filter);
  }

  @patch('/costomers')
  @response(200, {
    description: 'Costomers PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Costomers, {partial: true}),
        },
      },
    })
    costomers: Costomers,
    @param.where(Costomers) where?: Where<Costomers>,
  ): Promise<Count> {
    return this.costomersRepository.updateAll(costomers, where);
  }

  @get('/costomers/{id}')
  @response(200, {
    description: 'Costomers model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Costomers, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Costomers, {exclude: 'where'}) filter?: FilterExcludingWhere<Costomers>
  ): Promise<Costomers> {
    return this.costomersRepository.findById(id, filter);
  }

  @patch('/costomers/{id}')
  @response(204, {
    description: 'Costomers PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Costomers, {partial: true}),
        },
      },
    })
    costomers: Costomers,
  ): Promise<void> {
    await this.costomersRepository.updateById(id, costomers);
  }

  @put('/costomers/{id}')
  @response(204, {
    description: 'Costomers PUT success',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Costomers, {includeRelations: true}),
      },
    },

  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() costomers: Costomers,
    @param.filter(Costomers, {exclude: 'where'}) filter?: FilterExcludingWhere<Costomers>
  ): Promise<Costomers> {
    await this.costomersRepository.replaceById(id, costomers);
    return this.costomersRepository.findById(id, filter);
  }




  @del('/costomers/{id}')
  @response(204, {
    description: 'Costomers DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.costomersRepository.deleteById(id);
  }
}
