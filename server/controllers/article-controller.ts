import { Article } from '@prisma/client';
import { prisma } from '../prisma/client';
import { NotFoundError } from '../error/not-found-err';

export const getAll = async (): Promise<Article[]> => {
  return await prisma.article.findMany();
};

export const getById = async (id: string): Promise<Article | null> => {
  const article = await prisma.article.findUnique({ where: { id } });

  if (!article) {
    throw new NotFoundError(`Could not find article with id of ${id}`);
  }

  return article;
};
