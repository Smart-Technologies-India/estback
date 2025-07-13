import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Agree, Status } from '@prisma/client';

@ObjectType()
export class Religious {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  userId: number;

  @Field(() => String, { nullable: true })
  user_uid: string;

  @Field(() => String, { nullable: true })
  name: string;

  @Field(() => String, { nullable: true })
  email: string;

  @Field(() => String, { nullable: true })
  address: string;

  @Field(() => String, { nullable: true })
  mobile: string;

  @Field(() => Int, { nullable: true })
  village_id: number;
  
  @Field(() => Date, { nullable: true })
  from_date: Date;
  
  @Field(() => Date, { nullable: true })
  to_date: Date;
  
  @Field(() => String, { nullable: true })
  event_name: string;
  
  @Field(() => String, { nullable: true })
  event_address: string;
  
  @Field(() => String, { nullable: true })
  route_info: string;
    
  @Field(() => String, { nullable: true })
  relation: string;
  
  @Field(() => String, { nullable: true })
  doc_1_url: string;
  
  @Field(() => String, { nullable: true })
  doc_2_url: string;
  
  @Field(() => String, { nullable: true })
  applicant_uid_url: string;
   
  @Field(() => String, { nullable: true })
  undertaking_url: string;
    
  @Field(() => String, { nullable: true })
  signature_url: string;
  
  @Field(() => Agree)
  iagree: Agree;

  @Field(() => String, { nullable: true })
  remarks: string;

  @Field(() => String, { nullable: true })
  other_remarks: string;

  @Field(() => String, { nullable: true })
  rejection_reason: string;
  
  @Field(() => String, { nullable: true })
  condition_to_follow: string;

  @Field(() => Status, { nullable: true })
  certificate_id: string;

  @Field(() => Date, { nullable: true })
  certificate_date: Date;

  @Field(() => String, { nullable: true })
  certificate_url: string;

  @Field(() => Status)
  status: Status;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @Field(() => Date, { nullable: true })
  deletedAt: Date;
}
