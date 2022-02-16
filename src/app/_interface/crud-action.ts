export interface CrudAction {
  desc: string,
  iconPath: string,
  color?: string,
  navRoute?: string[],
  httpMethod?: string,
  httpRoute?: string,
  httpBodyData?: object
  callback?: Function
}
