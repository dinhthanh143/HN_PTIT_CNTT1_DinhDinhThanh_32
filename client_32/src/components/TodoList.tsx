import React, { useEffect, useState } from "react";
import "../css/todo.css";
import { useDispatch, useSelector } from "react-redux";
import type { RootType } from "../store";
import Swal from "sweetalert2";
import type { Todo } from "../reducers/TodoReducer";
export const TodoList = () => {
  const [isOpen, setOpen] = useState(false);
  const dispatch = useDispatch();
  const { todos } = useSelector((state: RootType) => state);
  const completed = todos.filter((t) => t.isCompleted).length;
  const priorityStyle = (priority: number): string => {
    switch (priority) {
      case 0:
        return "tag urgent";
      case 1:
        return "tag important";
      case 2:
        return "tag normal";
      case 3:
        return "tag not-important";
      default:
        return "";
    }
  };
  const handleDelete = (id: number) => {
    Swal.fire({
      title: "Ban co chac muon xoa nhiem vu nay?",
      showDenyButton: true,
      confirmButtonText: "Xac nhan",
      denyButtonText: `Huy`,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch({ type: "DELETE_TASK", payload: id });
        Swal.fire("Xoa thanh cong!", "", "success");
      }
    });
  };
  const [task, setTask] = useState<Todo>({
    id: Math.ceil(Math.random() * 1000),
    title: "",
    priority: -1,
    isCompleted: false,
  });
  const [fixTask, setFixTask] = useState({
    id: -1,
    title: "",
    priority: -1,
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newValue = name === "priority" ? Number(value) : value;
    if (modalFunction === "Add") {
      setTask({
        ...task,
        [name]: newValue,
      });
    } else {
      setFixTask({
        ...fixTask,
        [name]: newValue,
      });
    }
  };

  const [modalFunction, setModalFunction] = useState("");

  const handleModalFunction = (
    type: string,
    title?: string,
    priority?: number,
    id?: number
  ) => {
    if (fixTask) {
      setFixTask({
        id: Number(id),
        title: String(title),
        priority: Number(priority),
      });
    }
    setModalFunction(type);
    setOpen(true);
  };
  const handleSubmit = () => {
    if (modalFunction === "Add") {
      const isDuplicate = todos.some(
        (t) => t.title.trim().toLowerCase() === task.title.trim().toLowerCase()
      );
      if (!task.title.trim() || task.priority === -1 || isDuplicate) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Du lieu khong duoc de trong/trung!",
        });
        return;
      }
      dispatch({ type: "ADD_TASK", payload: task });
      Swal.fire({
        icon: "success",
        title: "Them Thanh cong",
      });
    } else {
      const isDuplicate = todos.some(
        (t) =>
          t.title.trim().toLowerCase() === fixTask.title.trim().toLowerCase() &&
          t.id !== fixTask.id
      );
      if (!fixTask.title.trim() || fixTask.priority === -1 || isDuplicate) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Du lieu khong duoc de trong/trung!",
        });
        return;
      }
      dispatch({ type: "FIX_TASK", payload: fixTask });
      Swal.fire({
        icon: "success",
        title: "Sua Thanh cong",
      });
    }
    setOpen(false);
  };
  const handleRadio = (type: number): boolean => {
    if (modalFunction === "Add") {
      return task.priority === -1 ? false : task.priority === type;
    } else {
      return fixTask.priority === -1 ? false : fixTask.priority === type;
    }
  };
  const getFilteredSortedTodos = (todos: Todo[], filter: number | "all") => {
    return [...todos]
      .filter((t) => (filter === "all" ? true : t.priority === filter))
      .sort((a, b) => a.priority - b.priority);
  };
  const [filter, setFilter] = useState<number | "all">("all");

  const filterPriority = (priority: string) => {
    setFilter(priority === "all" ? "all" : Number(priority));
  };

  const deleteAll = ()=>{
    if( completed !== todos.length){
      alert(`Chua hoan thanh tat ca cong viec`)
    }else{
      dispatch({type:"DELETE_ALL"})
    }
  }
  const filteredTodos = getFilteredSortedTodos(todos, filter);
  useEffect(() => {
    setTask({
      id: Math.ceil(Math.random() * 1000),
      title: "",
      priority: -1,
      isCompleted: false,
    });
  }, [todos]);
  return (
    <div className="todo-container">
      <h2 className="title">Danh sách công việc</h2>

      <div className="todo-header">
        <select
          name=""
          id=""
          style={{ width: "40%" }}
          onChange={(e) => filterPriority(e.target.value)}>
          <option value="" selected disabled hidden>
            Lọc Theo cấp độ
          </option>
          <option value="all">Tất cả</option>
          <option value="0">Khẩn cấp</option>
          <option value="1">Quan trọng</option>
          <option value="2">Bình thường</option>
          <option value="3">Không quan trọng</option>
        </select>
        <button className="btn add" onClick={() => handleModalFunction("Add")}>
          Thêm
        </button>
      </div>

      <ul className="todo-list">
        {filteredTodos.map((t) => (
          <li className="todo-item" key={t.id}>
            <label
              style={{
                textDecoration: t.isCompleted ? "line-through" : "none",
              }}>
              <input
                type="checkbox"
                checked={t.isCompleted}
                onChange={() =>
                  dispatch({ type: "TOGGLE_TASK", payload: t.id })
                }
              />{" "}
              {t.title}
            </label>
            <span className={priorityStyle(t.priority)}>
              {t.priority === 0
                ? "Khẩn cấp"
                : t.priority === 1
                ? "Quan trọng"
                : t.priority === 2
                ? "Bình thường"
                : "Không quan trọng"}
            </span>
            <div className="actions">
              <button
                className="btn edit"
                onClick={() =>
                  handleModalFunction("Fix", t.title, t.priority, t.id)
                }>
                Sửa
              </button>
              <button className="btn delete" onClick={() => handleDelete(t.id)}>
                Xóa
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="todo-footer">
        <span style={{ width: "40%" }}>
          <b>
            {completed === todos.length
              ? "✅ Hoàn thành tất cả"
              : `Số công việc hoàn thành: ${completed}`}
          </b>
        </span>
        <div className="actions">
          <button
            className="btn complete"
            onClick={() => dispatch({ type: "COMPLETE_ALL" })}>
            Hoàn thành tất cả
          </button>
          <button className="btn delete-all" onClick={deleteAll}>Xóa tất cả</button>
        </div>
      </div>
      {/* modal */}
      <div className="modal" style={{ display: isOpen ? "block" : "none" }}>
        <div className="modal-content">
          <div className="modal-header">
            <h3>
              {modalFunction === "Add" ? "Thêm mới công viêc" : "Sửa công việc"}
            </h3>
            <span className="close" onClick={() => setOpen(false)}>
              &times;
            </span>
          </div>
          <div className="modal-body">
            <label>Tên công việc</label>
            <input
              name="title"
              type="text"
              placeholder="Nhập tên công việc"
              value={modalFunction === "Add" ? task.title : fixTask.title}
              onChange={(e) => handleInputChange(e)}
            />
            <div className="priority-group">
              <label>
                <input
                  checked={handleRadio(0)}
                  type="radio"
                  name="priority"
                  value={0}
                  onChange={(e) => handleInputChange(e)}
                />{" "}
                Khẩn cấp
              </label>
              <label>
                <input
                  checked={handleRadio(1)}
                  type="radio"
                  name="priority"
                  value={1}
                  onChange={(e) => handleInputChange(e)}
                />{" "}
                Quan trọng
              </label>
              <label>
                <input
                  checked={handleRadio(2)}
                  type="radio"
                  name="priority"
                  value={2}
                  onChange={(e) => handleInputChange(e)}
                />{" "}
                Bình thường
              </label>
              <label>
                <input
                  checked={handleRadio(3)}
                  type="radio"
                  name="priority"
                  value={3}
                  onChange={(e) => handleInputChange(e)}
                />{" "}
                Không quan trọng
              </label>
            </div>
            <button className="btn add-full" onClick={handleSubmit}>
              {modalFunction === "Add" ? "Thêm mới " : "Sửa "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
