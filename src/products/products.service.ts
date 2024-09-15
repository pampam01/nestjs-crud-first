import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ProductsService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createProductDto: Prisma.ProductCreateInput) {
    return this.databaseService.product.create({
      data: createProductDto,
    });
  }

  async findAll() {
    const response = await this.databaseService.product.findMany();
    return response;
  }

  async findOne(id: number) {
    const response = await this.databaseService.product.findUnique({
      where: {
        id,
      },
      include: {
        description: true,
        reviews: true,
        tags: true,
      },
    });

    return response;
  }

  async update(id: number, updateProductDto: Prisma.ProductUpdateInput) {
    const response = await this.databaseService.product.update({
      where: {
        id,
      },
      data: updateProductDto,
    });
    return response;
  }

  async remove(id: number) {
    const response = await this.databaseService.product.delete({
      where: {
        id,
      },
    });

    return response;
  }
}
