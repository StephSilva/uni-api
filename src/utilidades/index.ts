import { getRepository } from 'typeorm';

export async function searchEntityByColumns(entityName: string, searchColumns: string[], searchTerm: string) {
  const repository = getRepository(entityName);

  const queryBuilder = repository.createQueryBuilder(entityName);
  
  searchColumns.forEach((columnName) => {
    queryBuilder.orWhere(`${entityName}.${columnName} LIKE :term`, { term: `%${searchTerm}%` });
  });

  queryBuilder.leftJoinAndSelect(`${entityName}.relatedEntity`, 'relatedEntity');

  const results = await queryBuilder.getMany();

  return results;
}
