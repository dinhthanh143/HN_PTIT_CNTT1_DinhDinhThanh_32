import React from "react";
import type { RootType } from "../store";
import { useSelector } from "react-redux";
export const ListUser = () => {
  const { profiles } = useSelector((state: RootType) => state);
  return (
    <div>
      <table
        border={1}
        cellPadding={"10px"}
        style={{ borderCollapse: "collapse", padding: "10px" }}>
        <thead>
          <tr style={{ padding: "10px" }}>
            <th style={{ padding: "10px" }}>Id</th>
            <th style={{ padding: "10px" }}>Tên</th>
            <th style={{ padding: "10px" }}>Giới tính</th>
            <th style={{ padding: "10px" }}>Ngày sinh</th>
            <th style={{ padding: "10px" }}>Địa chỉ</th>
            <th style={{ padding: "10px" }}>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {profiles.map((profile) => (
            <tr key={profile.id}>
              <td>{profile.id}</td>
              <td>{profile.fullName}</td>
              <td>{profile.gender}</td>
              <td>{profile.birthDate}</td>
              <td>{profile.address}</td>
              <td>
                <button>Sửa</button>
                <button style={{ marginLeft: "8px" }}>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
