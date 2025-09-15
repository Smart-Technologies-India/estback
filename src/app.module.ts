import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from 'prisma/prisma.module';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { UserModule } from './user/user.module';
import { MarriageModule } from './marriage/marriage.module';
import { RoadshowModule } from './roadshow/roadshow.module';
import { ReligiousModule } from './religious/religious.module';
import { AuthModule } from './auth/auth.module';
import { VillageModule } from './village/village.module';
import { UploaderModule } from './uploader/uploader.module';
import { QueryModule } from './query/query.module';
import { CommonModule } from './common/common.module';
import { GenericModule } from './generic/generic.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      serveRoot: '/public',
      rootPath: join(process.cwd(), 'public'),
    }),
    PrismaModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.graphql'),
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },
    }),
    AuthModule,
    UserModule,
    MarriageModule,
    RoadshowModule,
    ReligiousModule,
    VillageModule,
    UploaderModule,
    QueryModule,
    CommonModule,
    GenericModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
