export interface IRoleModel {
  id: number;
  abbreviation: string;
  title: string;
}

export interface IRoleModelConstructor extends IRoleModel {
  new(): IRoleModelConstructor;
}

// const etalon = {
//   id: {
//     type: Number,
//     required: true
//   },
//   abbreviation: {
//     type: String,
//     required: true
//   },
//   title: {
//     type: String,
//     required: true
//   }
// };

export function roleModelFactory() {
  class RoleModel implements IRoleModel {
    id: number = null;
    abbreviation: string;
    title: string;
  }

  return RoleModel;
}
