import { Injectable } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ReviewsService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createProductDto: Prisma.ReviewCreateInput) {
    return this.databaseService.review.create({
      data: createProductDto,
    });
  }

  async findAll() {
    const response = await this.databaseService.review.findMany();
    return response;
  }

  async findOne(id: number) {
    const response = await this.databaseService.review.findUnique({
      where: {
        id,
      },
    });

    return response;
  }

  async update(id: number, updateProductDto: Prisma.ReviewUpdateInput) {
    const response = await this.databaseService.review.update({
      where: {
        id,
      },
      data: updateProductDto,
    });
    return response;
  }

  async remove(id: number) {
    const response = await this.databaseService.review.delete({
      where: {
        id,
      },
    });

    return response;
  }
}
