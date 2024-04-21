import { Article } from '@prisma/client';
import { prisma } from '../prisma/client';
import { NotFoundError } from '../error/not-found-err';
import { InvalidPayloadError } from '../error/invalid-payload-err';

export const getAll = async (): Promise<Article[]> => {
  return await prisma.article.findMany();
};

export const getById = async (id: string): Promise<Article | null> => {
  const article = await prisma.article.findUnique({ where: { id } });

  if (!article) {
    throw new NotFoundError();
  }

  return article;
};

export const addArticle = async (
  title: string,
  subtitle: string
): Promise<Article> => {
  if (!title || !subtitle) {
    throw new InvalidPayloadError();
  }

  return await prisma.article.create({ data: { title, subtitle } });
};
