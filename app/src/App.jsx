import CreateTaskForm from "./components/CreateTaskForm/CreateTaskForm";
import TaskList from "./components/TaskList/TaskList";

function App() {
  return (
    <>
      <div className="min-w-full min-h-screen flex flex-col justify-center">
        <div className="flex flex-col bg-primary mx-auto w-5/12  rounded-lg p-16 gap-12">
          <CreateTaskForm></CreateTaskForm>
          <TaskList />
        </div>
      </div>
    </>
  );
}

export default App;
