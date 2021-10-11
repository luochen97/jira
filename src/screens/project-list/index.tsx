import React from "react";
import { List } from "./list";
import { SearchPanel } from "./search-panel";
import { useEffect, useState } from "react";
import { productList } from "api/list";
import { clearObject, useMount, useDebounce } from "utils/until";
import qs from "qs";
export const ProjectListScreen = () => {
  /* 声明一个响应式变量param,并声明一个更新param的函数，我们命名为setParam */
  /* useSate的用法会返回当前 state 以及更新 state 的函数*/
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  /* 用户列表 */
  const [users, setUsers]: [any, Function] = useState([]);
  /* 列表信息 */
  const [list, setList] = useState([]);
  const debounceVal = useDebounce(param, 1000);
  useEffect(() => {
    productList.getList(qs.stringify(clearObject(param))).then((res: any) => {
      setList(res);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceVal]);
  useMount(() => {
    productList.getUser().then((res) => {
      setUsers(res);
    });
  });
  return (
    <div>
      <SearchPanel
        users={users}
        param={param}
        setParam={setParam}
      ></SearchPanel>
      <List list={list} users={users}></List>
    </div>
  );
};
