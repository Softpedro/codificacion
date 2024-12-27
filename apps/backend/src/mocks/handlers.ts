import { http, HttpResponse } from "msw";

let tasks = [
  { id: "1", title: "Tarea 1", description: "Descripción 1", status: "todo" },
  { id: "2", title: "Tarea 2", description: "Descripción 2", status: "done" }
];

export const handlers = [
  http.get("/api/tasks", () => {
    return HttpResponse.json(tasks, { status: 200 });
  }),
  http.post("/api/tasks", async ({ request }) => {
    const newTask = (await request.json()) as {
      title: string;
      description: string;
      status: string;
    };
    const taskWithId = { id: Date.now().toString(), ...newTask };
    tasks.push(taskWithId);
    return HttpResponse.json(taskWithId, { status: 201 });
  }),
  http.put("/api/tasks/:id", async ({ request, params }) => {
    const updatedTask = (await request.json()) as {
      title: string;
      description: string;
      status: string;
    };
    tasks = tasks.map((task) =>
      task.id === params.id ? { ...task, ...updatedTask } : task
    );
    return HttpResponse.json(updatedTask, { status: 200 });
  }),
  http.delete("/api/tasks/:id", ({ params }) => {
    tasks = tasks.filter((task) => task.id !== params.id);
    return new HttpResponse(null, { status: 204 });
  })
];
