import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class ReportData {
  @Field(() => Int)
  srNo: number; // 'Sr. No.'

  @Field(() => String)
  applicantName: string; // "Applicant's Name"

  @Field(() => String)
  applicantAddress: string; // 'Applicant Address'

  @Field(() => String)
  applicationDate: string; // 'Application Date'

  @Field(() => String)
  eventName: string; // 'Event Name'

  @Field(() => String)
  permissionAddress: string; // 'Permission Address'

  @Field(() => String)
  permissionDate: string; // 'Permission Date' (if you want date range, better to split into startDate, endDate)

  @Field(() => String)
  routeInfo: string; // 'Route Info'

  @Field(() => String)
  mobile: string; // 'Mobile'

  @Field(() => String)
  email: string; // 'Email'

  @Field(() => String)
  relation: string; // 'Relation'

  @Field(() => String)
  formType: string; // 'Form Type'
}
