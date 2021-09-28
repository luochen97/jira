import React from "react";
type Param = {
  list: any[];
  users: any[];
};
export const List = ({ list, users }: Param) => {
  console.log(list);
  return (
    <table>
      <thead>
        <tr>
          <th>项目</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        {list.map((project) => (
          <tr>
            <td>{project.name}</td>
            <td>
              {users.find((user) => user.id === project.personId)?.name || ""}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
