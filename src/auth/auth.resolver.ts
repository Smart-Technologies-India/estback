import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { Auth } from './entities/auth.entity';
import { LoginUserInput } from './dto/loginuser.input';
import { SignUpUserInput } from './dto/signup.input';
import { MobileLoginInput } from './dto/mobile-auth.input';

@Resolver(() => Auth)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Query(() => Auth)
  signin(@Args('loginUserInput') loginUserInput: LoginUserInput) {
    return this.authService.signin(
      loginUserInput.contact,
      loginUserInput.password,
    );
  }

  @Mutation(() => Auth)
  signup(@Args('signUpUserInput') signUpUserInput: SignUpUserInput) {
    return this.authService.signup(
      signUpUserInput.name,
      signUpUserInput.contact,
      signUpUserInput.password,
    );
  }


  @Mutation(() => Auth)
  mobileLogin(@Args('mobileLoginInput') mobileLoginInput: MobileLoginInput) {
    return this.authService.mobileLogin(mobileLoginInput);
  }
  @Query(() => Auth)
  verifyOtp(@Args('mobileLoginInput') mobileLoginInput: MobileLoginInput) {
    return this.authService.verifyOtp(mobileLoginInput);
  }
}
