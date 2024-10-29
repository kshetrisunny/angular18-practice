import { Injectable } from '@angular/core';
import { type NewTaskData } from './task/task.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Learn Angular Basics',
      summary: 'Learn the basics of the angular concepts.',
      dueDate: '2024-08-15',
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Learn React Basics',
      summary: 'Learn the basics of the React concepts.',
      dueDate: '2024-09-25',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Learn Js Basics',
      summary: 'Learn the basics of the js concepts.',
      dueDate: '2024-10-01',
    },
    {
      id: 't4',
      userId: 'u4',
      title: 'Learn Ts Basics',
      summary: 'Learn the basics of the ts concepts.',
      dueDate: '2024-12-15',
    },
  ];

  constructor() {
    const tasks = localStorage.getItem('tasks');

    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }
  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(taskData: NewTaskData, userId: string) {
    this.tasks.push({
      id: new Date().getTime().toString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
    });
    this.saveTasks();
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
