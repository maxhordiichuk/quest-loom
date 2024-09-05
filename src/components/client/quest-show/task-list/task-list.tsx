'use client'

import {
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
} from '@dnd-kit/core'
import {
  SortableContext,
  arrayMove,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable'
import { startTransition, useState } from 'react'

import { Task } from '@/db/types'
import type { deleteTask, reorderTasks, updateTask } from '@/actions'

import { SortableTask } from './sortable-task'

interface TaskListProps {
  tasks: Task[]
  deleteTaskAction: typeof deleteTask
  updateTaskAction: typeof updateTask
  reorderTasksAction: typeof reorderTasks
}

export function TaskList({
  tasks: propsTasks,
  deleteTaskAction,
  updateTaskAction,
  reorderTasksAction,
}: TaskListProps) {
  const [tasks, setTasks] = useState(propsTasks)

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  const reorderAction = (id: string, oldIndex: number, newIndex: number) => {
    startTransition(async () => {
      await reorderTasksAction({ id, oldIndex, newIndex })
    })
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event

    if (over?.id && active.id !== over.id) {
      const oldIndex = tasks.findIndex(t => t.id === active.id)
      const newIndex = tasks.findIndex(t => t.id === over.id)

      setTasks(arrayMove(tasks, oldIndex, newIndex))
      reorderAction(active.id as string, oldIndex, newIndex)
    }
  }

  return (
    <DndContext
      id="task-list"
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <div className="grid gap-4">
        <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
          {tasks.map(task => (
            <SortableTask
              key={task.id}
              task={task}
              deleteTaskAction={deleteTaskAction}
              updateTaskAction={updateTaskAction}
            />
          ))}
        </SortableContext>
      </div>
    </DndContext>
  )
}
