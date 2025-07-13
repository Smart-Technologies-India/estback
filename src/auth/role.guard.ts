import { CanActivate, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

export class RoleGuard implements CanActivate {
  public role: string;
  constructor(role: string) {
    this.role = role;
  }
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context).getContext();
    const { role } = ctx.user;
    if (role == this.role) return true;
    return false;
  }
}
