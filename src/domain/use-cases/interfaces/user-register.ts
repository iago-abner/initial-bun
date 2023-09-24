export interface UserRegisterUseCase<I, O> {
  execute(input: I): Promise<O>;
}
