import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { medicalStaffValidationSchema } from 'validationSchema/medical-staffs';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.medical_staff
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getMedicalStaffById();
    case 'PUT':
      return updateMedicalStaffById();
    case 'DELETE':
      return deleteMedicalStaffById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getMedicalStaffById() {
    const data = await prisma.medical_staff.findFirst(convertQueryToPrismaUtil(req.query, 'medical_staff'));
    return res.status(200).json(data);
  }

  async function updateMedicalStaffById() {
    await medicalStaffValidationSchema.validate(req.body);
    const data = await prisma.medical_staff.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    return res.status(200).json(data);
  }
  async function deleteMedicalStaffById() {
    const data = await prisma.medical_staff.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
