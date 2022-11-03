import prisma from '../../lib/prisma';

export default async function handle(req, res) {

  const result = await prisma.post.findMany({
    where: { published: true }
  });

  res.json(result);
}
