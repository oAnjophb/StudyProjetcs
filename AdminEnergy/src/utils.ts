export function ErrorHanding<T>(user: T) {
  if (!user) {
    throw new Error('user does not exist')
  }
}
