import React from "react";
interface Param {
  users: any;
  param: any;
  setParam: any;
}
export const SearchPanel = ({ users, param, setParam }: Param) => {
  return (
    <form>
      <div>
        <input
          value={param.name}
          /* onChange={evt => setParam(Object.assign({}, param, evt.target.value))} */
          onChange={(evt) => setParam({ ...param, name: evt.target.value })}
        />
        <select
          value={param.personId}
          onChange={(evt) => setParam({ ...param, personId: evt.target.value })}
        >
          <option value="">负责人</option>
          {users.map((user: any) => (
            <option value={user.id} key={user.id}>
              {" "}
              {user.name}
            </option>
          ))}
        </select>{" "}
        {param.personId}
      </div>
    </form>
  );
};
