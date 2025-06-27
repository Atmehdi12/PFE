import { Role } from '../../roles/enums/role.enum';

export class User {
  // ... other fields like id, email, etc.
  roles: Role[];
}
