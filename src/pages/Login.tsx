import { useState, useMemo, FormEvent } from "react";
interface Props {
  handleStart(users: string[]): void;
}
const Login = (props: Props) => {
  const { handleStart } = props;
  const [users, setUsers] = useState(["", ""]);
  const handleInput = (event: FormEvent<HTMLInputElement>, index: number) => {
    const newUsers = [...users];
    newUsers.splice(index, 1, event.currentTarget.value);
    setUsers(newUsers);
  };
  const canStart = useMemo(
    () => users.every((user) => user && user.length > 0),
    [users]
  );
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!canStart) return;
    handleStart(users);
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="correo">Correo electronico</label>
          <input
            type="text"
            value={users[0]}
            onInput={(e) => handleInput(e, 0)}
          />
        </div>
        <div>
          <label htmlFor="contraseña">Contraseña</label>
          <input
            type="text"
            value={users[1]}
            onInput={(e) => handleInput(e, 1)}
          />
        </div>
        <div>
          <button type="submit" disabled={!canStart}>
            Iniciar sesion
          </button>
        </div>
      </form>
    </div>
  );
};
export default Login;
