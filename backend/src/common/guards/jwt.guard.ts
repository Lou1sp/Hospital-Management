import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JWTAuthGuard extends AuthGuard('jwt') {
  // Kế thừa AuthGuard('jwt') — chỉ cần làm vậy là đủ
  // Sau này có thể override canActivate() để thêm logic tùy chỉnh
  // Ví dụ: kiểm tra role, kiểm tra token có trong blacklist không...
}
