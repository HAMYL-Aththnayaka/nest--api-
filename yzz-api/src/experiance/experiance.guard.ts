import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class ExperianceGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    const  request  = context.switchToHttp().getRequest();

    //validate Request
    // const hasBlackBelt = request.user.exp.includes("5 years");
    return true;
  }
}
